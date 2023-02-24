const charactersControllers = require('./characters.controllers')

const getAllCharacters = (req, res) => {
    charactersControllers.findAllCharacters()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getCharacterById = (req, res) => {
    const id = req.params.id
    charactersControllers.findCharacterById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: `Character with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const postCharacter = (req, res) => {
    const { name, lastName, gender, description, typeId, regionId, scoreId, profileImg, backgroundImg } = req.body
    charactersControllers.createCharacter({ name, lastName, gender, description, typeId, regionId, scoreId, profileImg, backgroundImg })
        .then(data => {
            res.status(201).json({ message: 'Character Created', data })
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    name: 'String',
                    lastName: 'String',
                    gender: 'String',
                    description: 'String',
                    typeId: 'String',
                    regionId: 'String',
                    scoreId: 'String',
                    profileImg: 'String',
                    backgroundImg: 'String'
                }
            })
        })
}

const patchCharacter = (req, res) => {
    const { name, lastName, gender, description, typeId, regionId, scoreId, profileImg, backgroundImg } = req.body
    const id = req.params.id
    charactersControllers.updateCharacter(id, { name, lastName, gender, description, typeId, regionId, scoreId, profileImg, backgroundImg })
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Character Updated' })
            } else {
                res.status(404).json({ message: `Character with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    name: 'String',
                    lastName: 'String',
                    gender: 'String',
                    description: 'String',
                    typeId: 'String',
                    regionId: 'String',
                    scoreId: 'String',
                    profileImg: 'String',
                    backgroundImg: 'String'
                }
            })
        })
}

const deleteCharacter = (req, res) => {
    const id = req.params.id
    charactersControllers.deleteCharacter(id)
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Character Deleted' })
            } else {
                res.status(404).json({ message: `Character with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    getAllCharacters,
    getCharacterById,
    postCharacter,
    patchCharacter,
    deleteCharacter,
}