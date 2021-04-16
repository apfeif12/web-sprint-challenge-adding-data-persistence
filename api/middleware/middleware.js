function validateProjects(req, res, next) {
    if (req.baseUrl === "/api/projects") {
        if (!req.body.project_name) {
            res.status(400).send({
                errorMessage: "Project Name Required",
            });
        } else next();
    } 
}

function validateTasks(req, res, next) {
    if (req.baseUrl === "/api/tasks") {
        if (!req.body.project_name || req.body.project_description) {
            res.status(400).send({
                errorMessage: "Project Name and Description Required",
            });
        } else next();
    } 
}

module.exports = {
    validateProjects,
    validateTasks,
};
