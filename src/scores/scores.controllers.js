const Scores = require('../models/scores.models')

const findAllScores = async () => {
    const data = await Scores.findAll()
    return data
}

const findScoreById = async (id) => {
    const data = await Scores.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createScore = async (obj) => {
    const data = await Scores.create({
        score: obj.score
    })
    return data
}

const updateScore = async (id, obj) => {
    const data = await Scores.update(obj, {
        where: {
            id: id
        }
    })
    return data
}

const deleteScore = async (id) => {
    const data = await Scores.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
    findAllScores,
    findScoreById,
    createScore,
    updateScore,
    deleteScore
}