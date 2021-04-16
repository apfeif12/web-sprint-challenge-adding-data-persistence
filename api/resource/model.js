const db = require("../../data/dbConfig.js");

const getAll = async () => {
    try {
        const resources = await db("resources");
        return resources;
    } catch (error) {
        return error;
    }
};

const getById = async (id) => {
    try {
        const resources = await db("resources")
            .where({ resource_id: id })
            .first();
        return resources;
    } catch (error) {
        return error;
    }
};

const create = async (resource) => {
    try {
        const resources = await db("resources").insert(resource);
        return getById(resources[0]);
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAll,
    create,
    getById,
};
