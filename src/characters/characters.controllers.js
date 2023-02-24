const Characters = require('../models/characters.models')
const uuid = require('uuid')
const Types = require('../models/types.models')
const Regions = require('../models/regions.models')
const Scores = require('../models/scores.models')
const CharactersElements = require('../models/charactersElements.models')
const Elements = require('../models/elements.models')

const findAllCharacters = async () => {
    const data = await Characters.findAll({
        include: [{
            model: CharactersElements,
            attributes: ['elementId'],
            include: [{ model: Elements, attributes: ['name', 'img_url'] }]
        }]

    })
    return data
}

const findCharacterById = async (id) => {
    const data = await Characters.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createCharacter = async (obj) => {
    const data = await Characters.create({
        id: uuid.v4(),
        name: obj.name,
        last_name: obj.lastName,
        gender: obj.gender,
        description: obj.description,
        typeId: obj.typeId,
        regionId: obj.regionId,
        scoreId: obj.scoreId,
        profile_img_url: obj.profileImg,
        background_img_url: obj.backgroundImg
    })
    return data
}

const updateCharacter = async (id, obj) => {
    const data = await Characters.update(obj, {
        where: {
            id: id
        }
    })
    return data
}

const deleteCharacter = async (id) => {
    const data = await Characters.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
    findAllCharacters,
    findCharacterById,
    createCharacter,
    updateCharacter,
    deleteCharacter
}