const { DataTypes } = require('sequelize')
const database = require('../utils/database')
const Elements = require('./elements.models')
const Characters = require('./characters.models')

const CharactersElements = database.define('characters_elements', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    characterId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Characters,
            key: 'id'
        }
    },
    elementId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Elements,
            key: 'id'
        }
    }
})

module.exports = CharactersElements