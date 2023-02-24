const { DataTypes } = require('sequelize')
const database = require('../utils/database')

const Types = database.define('types', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [2, 50]
        }
    }
})

module.exports = Types