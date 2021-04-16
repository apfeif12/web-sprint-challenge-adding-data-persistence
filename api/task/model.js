const db = require("../../data/dbConfig.js");

const getAll = async () => {
    try {
        const tasks = await db("tasks");
        return tasks.map((task) =>
        task.task_completed === 0
                ? { ...task, task_completed: false }
                : { ...task, task_completed: true }
        );
    } catch (error) {
        return error;
    }
};

const getById = async (id) => {
    try {
        const tasks = await db("tasks").where({ task_id: id }).first();
        return {
            ...tasks,
            task_completed: tasks.task_completed === 0 ? false : true,
        };
    } catch (error) {
        return error;
    }
};

const create = async (task) => {
    try {
        const tasks = await db("tasks").insert(task);
        return getById(tasks[0]);
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAll,
    create,
    getById,
};
