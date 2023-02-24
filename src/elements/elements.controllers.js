const Elements = require('../models/elements.models')

const findAllElements = async () => {
    const data = await Elements.findAll()
    return data
}

const findElementById = async (id) => {
    const data = await Elements.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createElement = async (obj) => {
    const data = await Elements.create({
        name: obj.name,
        img_url: obj.imgUrl
    })
    return data
}

const updateElement = async (id, obj) => {
    const data = await Elements.update(obj, {
        where: {
            id: id
        }
    })
    return data
}

const deleteElement = async (id) => {
    const data = await Elements.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
    findAllElements,
    findElementById,
    createElement,
    updateElement,
    deleteElement
}