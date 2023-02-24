const Types = require('../models/types.models')

const findAllTypes = async () => {
    const data = await Types.findAll()
    return data
}

const findTypeById = async (id) => {
    const data = await Types.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createType = async (obj) => {
    const data = await Types.create({
        name: obj.name
    })
    return data
}

const updateType = async (id, obj) => {
    const data = await Types.update(obj, {
        where: {
            id: id
        }
    })
    return data
}

const deleteType = async (id) => {
    const data = await Types.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
    findAllTypes,
    findTypeById,
    createType,
    updateType,
    deleteType
}