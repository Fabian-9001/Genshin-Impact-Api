const { DataTypes } = require('sequelize')
const database = require('../utils/database')
const Artifacts = require('./artifacts.models')
const Scores = require('./scores.models')

const ArtifactsScores = database.define('artifacts_scores', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    artifactId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Artifacts,
            key: 'id'
        }
    },
    scoreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Scores,
            key: 'id'
        }
    }
})

module.exports = ArtifactsScores