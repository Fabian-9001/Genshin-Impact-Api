const artifactsControllers = require('./artifacts.controllers')

const getAllArtifacts = (req, res) => {
    artifactsControllers.findAllArtifacts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getArtifactById = (req, res) => {
    const id = req.params.id
    artifactsControllers.findArtifactById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: `Artifact with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const postArtifact = (req, res) => {
    const { name, descriptionTwoPieces, descriptionFourPieces, imgUrl } = req.body
    artifactsControllers.createArtifact({ name, descriptionTwoPieces, descriptionFourPieces, imgUrl })
        .then(data => {
            res.status(201).json({ message: 'Artifact Created', data })
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    name: 'String',
                    descriptionTwoPieces: 'String',
                    descriptionFourPieces: 'String',
                    imgUrl: 'String'
                }
            })
        })
}

const patchArtifact = (req, res) => {
    const { name, descriptionTwoPieces, descriptionFourPieces, imgUrl } = req.body
    const id = req.params.id
    artifactsControllers.updateArtifact(id, { name, descriptionTwoPieces, descriptionFourPieces, imgUrl })
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Artifact Updated' })
            } else {
                res.status(404).json({ message: `Artifact with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    name: 'String',
                    descriptionTwoPieces: 'String',
                    descriptionFourPieces: 'String',
                    imgUrl: 'String'
                }
            })
        })
}

const deleteArtifact = (req, res) => {
    const id = req.params.id
    artifactsControllers.deleteArtifact(id)
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Artifact Deleted' })
            } else {
                res.status(404).json({ message: `Artifact with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    getAllArtifacts,
    getArtifactById,
    postArtifact,
    patchArtifact,
    deleteArtifact,
}