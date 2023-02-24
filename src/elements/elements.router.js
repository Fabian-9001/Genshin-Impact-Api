const elementsServices = require('./elements.services')
const router = require('express').Router()
const authMiddleware = require('../middleware/auth.middleware')
const roleMiddleware = require('../middleware/role.middleware')

router.route('/')
    .get(authMiddleware.authenticate('jwt', { session: false }), elementsServices.getAllElements)
    .post(authMiddleware.authenticate('jwt', { session: false }), elementsServices.postElement)

router.route('/:id')
    .get(authMiddleware.authenticate('jwt', { session: false }), elementsServices.getElementById)
    .patch(authMiddleware.authenticate('jwt', { session: false }), elementsServices.patchElement)
    .delete(authMiddleware.authenticate('jwt', { session: false }), elementsServices.deleteElement)

module.exports = router