const artifactsScoresControllers = require('./artifactsScores.controllers')

const getAllArtifactsScores = (req, res) => {
    artifactsScoresControllers.findAllArtifactsScores()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getArtifactsScoreById = (req, res) => {
    const id = req.params.id
    artifactsScoresControllers.findArtifactsScoreById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: `Artifact Score with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const postArtifactsScore = (req, res) => {
    const { artifactId, scoreId } = req.body
    artifactsScoresControllers.createArtifactsScore({ artifactId, scoreId })
        .then(data => {
            res.status(201).json({ message: 'Artifact Score Created', data })
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    artifactId: 'String',
                    scoreId: 'String'
                }
            })
        })
}

const patchArtifactsScore = (req, res) => {
    const { artifactId, scoreId } = req.body
    const id = req.params.id
    artifactsScoresControllers.updateArtifactsScore(id, { artifactId, scoreId })
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Artifact Score Updated' })
            } else {
                res.status(404).json({ message: `Artifact Score with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    artifactId: 'String',
                    scoreId: 'String'
                }
            })
        })
}

const deleteArtifactsScore = (req, res) => {
    const id = req.params.id
    artifactsScoresControllers.deleteArtifactsScore(id)
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Artifact Score Deleted' })
            } else {
                res.status(404).json({ message: `Artifact Score with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    getAllArtifactsScores,
    getArtifactsScoreById,
    postArtifactsScore,
    patchArtifactsScore,
    deleteArtifactsScore,
}