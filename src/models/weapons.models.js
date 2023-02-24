const { DataTypes } = require('sequelize')
const database = require('../utils/database')
const Types = require('./types.models')
const Scores = require('./scores.models')

const Weapons = database.define('weapons', {
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
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    scoreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Scores,
            key: 'id'
        }
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Types,
            key: 'id'
        }
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Weapons 