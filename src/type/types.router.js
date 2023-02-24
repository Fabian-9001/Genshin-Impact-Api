const typesServices = require('./types.services')
const router = require('express').Router()
const authMiddleware = require('../middleware/auth.middleware')
const roleMiddleware = require('../middleware/role.middleware')

router.route('/')
    .get(authMiddleware.authenticate('jwt', { session: false }), typesServices.getAllTypes)
    .post(authMiddleware.authenticate('jwt', { session: false }), typesServices.postType)

router.route('/:id')
    .get(authMiddleware.authenticate('jwt', { session: false }), typesServices.getTypeById)
    .patch(authMiddleware.authenticate('jwt', { session: false }), typesServices.patchType)
    .delete(authMiddleware.authenticate('jwt', { session: false }), typesServices.deleteType)

module.exports = router