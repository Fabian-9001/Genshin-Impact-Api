const { DataTypes } = require('sequelize')
const database = require('../utils/database')

const Elements = database.define('elements', {
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
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Elements