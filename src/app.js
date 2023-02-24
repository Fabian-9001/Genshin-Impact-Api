//Imports and Dependecies
const express = require('express')
const config = require('../config')
const database = require('./utils/database')
const cors = require('cors')
const usersRoutes = require('./users/users.router')
const authRoutes = require('./auth/auth.router')
const weaponsRoutes = require('./weapons/weapons.router')
const typesRoutes = require('./type/types.router')
const scoresRoutes = require('./scores/scores.router')
const regionsRoutes = require('./regions/regions.router')
const artifactsRoutes = require('./artifacts/artifacts.router')
const artifactsScoresRoutes = require('./artifacts-scores/artifactsScores.router')
const elementsRoutes = require('./elements/elements.router')
const charactersRoutes = require('./characters/characters.router')
const charactersElementsRoutes = require('./characters-elements/charactersElements.router')
const initModels = require('./models/initModels')

//Initial Configs
const app = express()
app.use(express.json())
app.use(cors())

//Database
database.authenticate()
    .then(() => console.log('This Server is Authenticated'))
    .catch(err => console.log(err))

database.sync()
    .then(() => console.log('This Server is Synced'))
    .catch(err => console.log(err))

initModels()

//Routes
app.get('/', (req, res) => {
    res.status(200).json('Ok!')
})

app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/weapons', weaponsRoutes)
app.use('/api/v1/types', typesRoutes)
app.use('/api/v1/scores', scoresRoutes)
app.use('/api/v1/regions', regionsRoutes)
app.use('/api/v1/artifacts', artifactsRoutes)
app.use('/api/v1/artifacts-scores', artifactsScoresRoutes)
app.use('/api/v1/elements', elementsRoutes)
app.use('/api/v1/characters', charactersRoutes)
app.use('/api/v1/characters-elements', charactersElementsRoutes)

//Server
app.listen(config.api.port, () => {
    console.log(`The Server ${config.api.host} is Active`)
})