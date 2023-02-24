const scoresControllers = require('./scores.controllers')

const getAllScores = (req, res) => {
    scoresControllers.findAllScores()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getScoreById = (req, res) => {
    const id = req.params.id
    scoresControllers.findScoreById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: `Score with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const postScore = (req, res) => {
    const { score } = req.body
    scoresControllers.createScore({ score })
        .then(data => {
            res.status(201).json({ message: 'Score Created', data })
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    score: 'String'
                }
            })
        })
}

const patchScore = (req, res) => {
    const { score } = req.body
    const id = req.params.id
    scoresControllers.updateScore(id, { score })
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Score Updated' })
            } else {
                res.status(404).json({ message: `Score with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message, fields: {
                    score: 'String'
                }
            })
        })
}

const deleteScore = (req, res) => {
    const id = req.params.id
    scoresControllers.deleteScore(id)
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Score Deleted' })
            } else {
                res.status(404).json({ message: `Score with id ${id} not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    getAllScores,
    getScoreById,
    postScore,
    patchScore,
    deleteScore,
}