const charactersElementsServices = require('./charactersElements.services')
const router = require('express').Router()
const authMiddleware = require('../middleware/auth.middleware')
const roleMiddleware = require('../middleware/role.middleware')

router.route('/')
    .get(authMiddleware.authenticate('jwt', { session: false }), charactersElementsServices.getAllCharacterElements)
    .post(authMiddleware.authenticate('jwt', { session: false }), charactersElementsServices.postCharacterElement)

router.route('/:id')
    .get(authMiddleware.authenticate('jwt', { session: false }), charactersElementsServices.getCharacterElementById)
    .patch(authMiddleware.authenticate('jwt', { session: false }), charactersElementsServices.patchCharacterElement)
    .delete(authMiddleware.authenticate('jwt', { session: false }), charactersElementsServices.deleteCharacterElement)

module.exports = router