const typesControllers = require('./types.controllers')

const getAllTypes = (req, res) => {
    typesControllers.findAllTypes()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getTypeById = (req, res) => {
    const id = req.params.id
    typesControllers.findTypeById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: `Type with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const postType = (req, res) => {
    const { name } = req.body
    typesControllers.createType({ name })
        .then(data => {
            res.status(201).json({ message: 'Type Created', data })
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    name: 'String'
                }
            })
        })
}

const patchType = (req, res) => {
    const { name } = req.body
    const id = req.params.id
    typesControllers.updateType(id, { name })
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Type Updated' })
            } else {
                res.status(404).json({ message: `Type with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    name: 'String'
                }
            })
        })
}

const deleteType = (req, res) => {
    const id = req.params.id
    typesControllers.deleteType(id)
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Type Deleted' })
            } else {
                res.status(404).json({ message: `Type with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    getAllTypes,
    getTypeById,
    postType,
    patchType,
    deleteType,
}