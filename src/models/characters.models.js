const { DataTypes } = require('sequelize')
const database = require('../utils/database')
const Regions = require('./regions.models')
const Types = require('./types.models')
const Scores = require('./scores.models')

const Characters = database.define('characters', {
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
    last_name: {
        type: DataTypes.STRING,
        validate: {
            len: [2, 50]
        }
    },
    gender: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Types,
            key: 'id'
        }
    },
    regionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Regions,
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
    },
    profile_img_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    background_img_url: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Characters