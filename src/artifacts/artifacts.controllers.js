const Artifacts = require('../models/artifacts.models')
const uuid = require('uuid')
const ArtifactsScores = require('../models/artfifactsScores.models')
const Scores = require('../models/scores.models')

const findAllArtifacts = async () => {
    const data = await Artifacts.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        include: {
            model: ArtifactsScores,
            attributes: ['scoreId'],
            include: [{ model: Scores, attributes: ['score'] }]
        }
    })
    return data
}

const findArtifactById = async (id) => {
    const data = await Artifacts.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createArtifact = async (obj) => {
    const data = await Artifacts.create({
        id: uuid.v4(),
        name: obj.name,
        description_two_pieces: obj.descriptionTwoPieces,
        description_four_pieces: obj.descriptionFourPieces,
        img_url: obj.imgUrl
    })
    return data
}

const updateArtifact = async (id, obj) => {
    const data = await Artifacts.update(obj, {
        where: {
            id: id
        }
    })
    return data
}

const deleteArtifact = async (id) => {
    const data = await Artifacts.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
    findAllArtifacts,
    findArtifactById,
    createArtifact,
    updateArtifact,
    deleteArtifact
}