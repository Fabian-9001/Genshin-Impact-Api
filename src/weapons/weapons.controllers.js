const Weapons = require('../models/weapons.models')
const uuid = require('uuid')
const Types = require('../models/types.models')
const Scores = require('../models/scores.models')


const findAllWeapons = async () => {
    const data = await Weapons.findAll({
        attributes: ['name', 'description', 'img_url'],
        include: [{
            model: Types,
            attributes: ['name']
        }, {
            model: Scores,
            attributes: ['score']
        }]
    })
    return data
}

const findWeaponById = async (id) => {
    const data = await Weapons.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createWeapon = async (obj) => {
    const data = await Weapons.create({
        id: uuid.v4(),
        name: obj.name,
        description: obj.description,
        scoreId: obj.scoreId,
        typeId: obj.typeId,
        img_url: obj.imgUrl
    })
    return data
}

const updateWeapon = async (id, obj) => {
    const data = await Weapons.update(obj, {
        where: {
            id: id
        }
    })
    return data
}

const deleteWeapon = async (id) => {
    const data = await Weapons.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
    findAllWeapons,
    findWeaponById,
    createWeapon,
    updateWeapon,
    deleteWeapon
}