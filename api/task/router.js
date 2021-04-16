const router = require("express").Router();
const Task = require("./model.js");
const { validateTasks } = require("../middleware/middleware.js");

router.get("/", async (req, res, next) => {
    try {
        const getTask = await Task.getAll();
        res.status(200).json(getTask);
    } catch (error) {
        next(error);
    }
});

router.post("/", validateTasks, async (req, res, next) => {
    try {
        const postTask = await Task.create(req.body);
        res.status(200).json(postTask);
    } catch (error) {
        next(error);
    }
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        info: 'task router error handling',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;
