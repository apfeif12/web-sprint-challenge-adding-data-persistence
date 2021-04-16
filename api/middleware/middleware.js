const Resource = require("../resource/model.js");

function validateProjects(req, res, next) {
    if (req.baseUrl === "/api/projects") {
        if (!req.body.project_name) {
            res.status(400).send({
                errorMessage: "Project Name Required",
            });
        } else next();
    } 
}

const checkResourceUnique = async (req, res, next) => {
    try {
        const resourceName = await Resource.getById(req.params.id);
        if (!resourceName) {
            next();
        } else {
            next({
                status: 400,
                message: `resource already exists`,
            });
        }
    } catch (error) {
        next(error);
    }
};
module.exports = {
    validateProjects,
    checkResourceUnique,
};
