const { DataTypes } = require('sequelize')
const database = require('../utils/database')

const Scores = database.define('scores', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Scores