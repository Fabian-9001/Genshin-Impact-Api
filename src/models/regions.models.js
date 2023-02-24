const { DataTypes } = require('sequelize')
const database = require('../utils/database')

const Regions = database.define('regions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 50]
        }
    }
})

module.exports = Regions