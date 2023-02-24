const charactersServices = require('./characters.services')
const router = require('express').Router()
const authMiddleware = require('../middleware/auth.middleware')
const roleMiddleware = require('../middleware/role.middleware')

router.route('/')
    .get(authMiddleware.authenticate('jwt', { session: false }), charactersServices.getAllCharacters)
    .post(authMiddleware.authenticate('jwt', { session: false }), charactersServices.postCharacter)

router.route('/:id')
    .get(authMiddleware.authenticate('jwt', { session: false }), charactersServices.getCharacterById)
    .patch(authMiddleware.authenticate('jwt', { session: false }), charactersServices.patchCharacter)
    .delete(authMiddleware.authenticate('jwt', { session: false }), charactersServices.deleteCharacter)

module.exports = router