const ArtifactsScores = require('../models/artfifactsScores.models')
const uuid = require('uuid')

const findAllArtifactsScores = async () => {
    const data = await ArtifactsScores.findAll()
    return data
}

const findArtifactsScoreById = async (id) => {
    const data = await ArtifactsScores.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createArtifactsScore = async (obj) => {
    const data = await ArtifactsScores.create({
        id: uuid.v4(),
        artifactId: obj.artifactId,
        scoreId: obj.scoreId
    })
    return data
}

const updateArtifactsScore = async (id, obj) => {
    const data = await ArtifactsScores.update(obj, {
        where: {
            id: id
        }
    })
    return data
}

const deleteArtifactsScore = async (id) => {
    const data = await ArtifactsScores.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
    findAllArtifactsScores,
    findArtifactsScoreById,
    createArtifactsScore,
    updateArtifactsScore,
    deleteArtifactsScore
}