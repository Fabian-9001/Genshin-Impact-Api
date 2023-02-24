const weaponsControllers = require('./weapons.controllers')

const getAllWeapons = (req, res) => {
    weaponsControllers.findAllWeapons()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getWeaponById = (req, res) => {
    const id = req.params.id
    weaponsControllers.findWeaponById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: `Weapon with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const postWeapon = (req, res) => {
    const { name, description, scoreId, typeId, imgUrl } = req.body
    weaponsControllers.createWeapon({ name, description, scoreId, typeId, imgUrl })
        .then(data => {
            res.status(201).json({ message: 'Weapon Created', data })
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    name: 'String',
                    description: 'String',
                    scoreId: 'String',
                    typeId: 'String',
                    imgUrl: 'String'
                }
            })
        })
}

const patchWeapon = (req, res) => {
    const { name, description, scoreId, typeId, imgUrl } = req.body
    const id = req.params.id
    weaponsControllers.updateWeapon(id, { name, description, scoreId, typeId, imgUrl })
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Weapon Updated' })
            } else {
                res.status(404).json({ message: `Weapon with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    name: 'String',
                    description: 'String',
                    scoreId: 'String',
                    typeId: 'String',
                    imgUrl: 'String'
                }
            })
        })
}

const deleteWeapon = (req, res) => {
    const id = req.params.id
    weaponsControllers.deleteWeapon(id)
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Weapon Deleted' })
            } else {
                res.status(404).json({ message: `Weapon with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    getAllWeapons,
    getWeaponById,
    postWeapon,
    patchWeapon,
    deleteWeapon,
}