const router = require("express").Router();
const Project = require("./model.js");
const { validateProjects } = require("../middleware/middleware.js");

router.get("/", async (req, res, next) => {
    try {
        const getProject = await Project.getAll();
        res.status(200).json(getProject);
    } catch (error) {
        next(error);
    }
});

router.post("/", validateProjects, async (req, res, next) => {
    try {
        const postProject = await Project.create(req.body);
        res.status(201).json(postProject);
    } catch (error) {
        next(error);
    }
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        info: "project router error handling",
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;
