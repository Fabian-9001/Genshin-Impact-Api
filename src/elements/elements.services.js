const elementsControllers = require('./elements.controllers')

const getAllElements = (req, res) => {
    elementsControllers.findAllElements()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getElementById = (req, res) => {
    const id = req.params.id
    elementsControllers.findElementById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: `Element with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const postElement = (req, res) => {
    const { name, imgUrl } = req.body
    elementsControllers.createElement({ name, imgUrl })
        .then(data => {
            res.status(201).json({ message: 'Element Created', data })
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    name: 'String',
                    imgUrl: 'String'
                }
            })
        })
}

const patchElement = (req, res) => {
    const { name, imgUrl } = req.body
    const id = req.params.id
    elementsControllers.updateElement(id, { name, imgUrl })
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Element Updated' })
            } else {
                res.status(404).json({ message: `Element with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    name: 'String',
                    imgUrl: 'String'
                }
            })
        })
}

const deleteElement = (req, res) => {
    const id = req.params.id
    elementsControllers.deleteElement(id)
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Element Deleted' })
            } else {
                res.status(404).json({ message: `Element with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    getAllElements,
    getElementById,
    postElement,
    patchElement,
    deleteElement,
}