const db = require("../../data/dbConfig.js");


const getAll = async () => {
    try {
        const projects = await db("projects");
        return projects.map((project) =>
            project.project_completed === 0
                ? { ...project, project_completed: false }
                : { ...project, project_completed: true }
        );
    } catch (error) {
        return error;
    }
};

const getById = async (id) => {
    try {
        const projects = await db("projects").where({ project_id: id }).first();
        return {
            ...projects,
            project_completed: projects.project_completed === 0 ? false : true,
        };
    } catch (error) {
        return error;
    }
};

const create = async (project) => {
    try {
        const postProject = await db("projects").insert(project);
        return getById(postProject[0]);
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAll,
    getById,
    create,
};
