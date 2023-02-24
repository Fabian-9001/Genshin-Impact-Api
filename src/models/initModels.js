const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Characters = require('./characters.models')
const Weapons = require('./weapons.models')
const Artifacts = require('./artifacts.models')
const Regions = require('./regions.models')
const Types = require('./types.models')
const Scores = require('./scores.models')
const ArtifactsScores = require('./artfifactsScores.models')
const Elements = require('./elements.models')
const CharactersElements = require('./charactersElements.models')

const initModels = () => {

    //Recovery Passwords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)

    //Weapons
    Types.hasMany(Weapons)
    Weapons.belongsTo(Types)

    Scores.hasMany(Weapons)
    Weapons.belongsTo(Scores)

    //Artifacts 
    Artifacts.hasMany(ArtifactsScores)
    ArtifactsScores.belongsTo(Artifacts)

    Scores.hasMany(ArtifactsScores)
    ArtifactsScores.belongsTo(Scores)

    //Characters
    Regions.hasMany(Characters)
    Characters.belongsTo(Regions)

    Scores.hasMany(Characters)
    Characters.belongsTo(Scores)

    Types.hasMany(Characters)
    Characters.belongsTo(Types)

    Characters.hasMany(CharactersElements)
    CharactersElements.belongsTo(Characters)

    Elements.hasMany(CharactersElements)
    CharactersElements.belongsTo(Elements)
}

module.exports = initModels