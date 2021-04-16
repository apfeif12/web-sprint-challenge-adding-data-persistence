function validateProjects(req, res, next) {
    if (req.baseUrl === "/api/projects") {
        if (!req.body.project_name) {
            res.status(400).send({
                errorMessage: "Project Name Required",
            });
        } else next();
    } 
}


module.exports = {
    validateProjects,
};
