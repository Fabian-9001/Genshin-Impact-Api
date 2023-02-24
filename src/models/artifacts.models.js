const { DataTypes } = require('sequelize')
const database = require('../utils/database')
const Scores = require('../models/scores.models')

const Artifacts = database.define('artifacts', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [2, 50]
        }
    },
    description_two_pieces: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description_four_pieces: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Artifacts