const charactersElementsControllers = require('./charactersElements.controllers')

const getAllCharacterElements = (req, res) => {
    charactersElementsControllers.findAllCharacterElements()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getCharacterElementById = (req, res) => {
    const id = req.params.id
    charactersElementsControllers.findCharacterElementById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: `Character Element with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const postCharacterElement = (req, res) => {
    const { characterId, elementId } = req.body
    charactersElementsControllers.createCharacterElement({ characterId, elementId })
        .then(data => {
            res.status(201).json({ message: 'Character Element Created', data })
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    characterId: 'String',
                    elementId: 'String'
                }
            })
        })
}

const patchCharacterElement = (req, res) => {
    const { characterId, elementId } = req.body
    const id = req.params.id
    charactersElementsControllers.updateCharacterElement(id, { characterId, elementId })
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Character Element Updated' })
            } else {
                res.status(404).json({ message: `Character Element with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    characterId: 'String',
                    elementId: 'String'
                }
            })
        })
}

const deleteCharacterElement = (req, res) => {
    const id = req.params.id
    charactersElementsControllers.deleteCharacterElement(id)
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Character Element Deleted' })
            } else {
                res.status(404).json({ message: `Character Element with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    getAllCharacterElements,
    getCharacterElementById,
    postCharacterElement,
    patchCharacterElement,
    deleteCharacterElement,
}