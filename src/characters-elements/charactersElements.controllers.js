const CharactersElements = require('../models/charactersElements.models')
const uuid = require('uuid')

const findAllCharacterElements = async () => {
    const data = await CharactersElements.findAll()
    return data
}

const findCharacterElementById = async (id) => {
    const data = await CharactersElements.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createCharacterElement = async (obj) => {
    const data = await CharactersElements.create({
        id: uuid.v4(),
        characterId: obj.characterId,
        elementId: obj.elementId
    })
    return data
}

const updateCharacterElement = async (id, obj) => {
    const data = await CharactersElements.update(obj, {
        where: {
            id: id
        }
    })
    return data
}

const deleteCharacterElement = async (id) => {
    const data = await CharactersElements.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
    findAllCharacterElements,
    findCharacterElementById,
    createCharacterElement,
    updateCharacterElement,
    deleteCharacterElement
}