const router = require("express").Router();
const Resource = require("./model.js");

router.get("/", async (req, res, next) => {
    try {
        const getResource = await Resource.getAll();
        res.status(200).json(getResource);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const postResource = await Resource.create(req.body);
        res.status(200).json(postResource);
    } catch (error) {
        next(error);
    }
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        info: 'resource router error handling',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;
