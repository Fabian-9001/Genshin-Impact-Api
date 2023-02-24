const regionsControllers = require('./regions.controllers')

const getAllRegions = (req, res) => {
    regionsControllers.findAllRegions()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getRegionById = (req, res) => {
    const id = req.params.id
    regionsControllers.findRegionById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: `Region with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const postRegion = (req, res) => {
    const { name } = req.body
    regionsControllers.createRegion({ name })
        .then(data => {
            res.status(201).json({ message: 'Region Created', data })
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    name: 'String'
                }
            })
        })
}

const patchRegion = (req, res) => {
    const { name } = req.body
    const id = req.params.id
    regionsControllers.updateRegion(id, { name })
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Region Updated' })
            } else {
                res.status(404).json({ message: `Region with id ${id} not found` })
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

const deleteRegion = (req, res) => {
    const id = req.params.id
    regionsControllers.deleteRegion(id)
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Region Deleted' })
            } else {
                res.status(404).json({ message: `Region with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    getAllRegions,
    getRegionById,
    postRegion,
    patchRegion,
    deleteRegion,
}