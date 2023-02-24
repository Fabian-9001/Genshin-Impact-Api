const Regions = require('../models/regions.models')

const findAllRegions = async () => {
    const data = await Regions.findAll()
    return data
}

const findRegionById = async (id) => {
    const data = await Regions.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createRegion = async (obj) => {
    const data = await Regions.create({
        name: obj.name
    })
    return data
}

const updateRegion = async (id, obj) => {
    const data = await Regions.update(obj, {
        where: {
            id: id
        }
    })
    return data
}

const deleteRegion = async (id) => {
    const data = await Regions.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
    findAllRegions,
    findRegionById,
    createRegion,
    updateRegion,
    deleteRegion
}