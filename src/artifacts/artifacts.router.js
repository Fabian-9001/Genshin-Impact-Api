const artifactsServices = require('./artifacts.services')
const router = require('express').Router()
const authMiddleware = require('../middleware/auth.middleware')
const roleMiddleware = require('../middleware/role.middleware')

router.route('/')
    .get(authMiddleware.authenticate('jwt', { session: false }), artifactsServices.getAllArtifacts)
    .post(authMiddleware.authenticate('jwt', { session: false }), artifactsServices.postArtifact)

router.route('/:id')
    .get(authMiddleware.authenticate('jwt', { session: false }), artifactsServices.getArtifactById)
    .patch(authMiddleware.authenticate('jwt', { session: false }), artifactsServices.patchArtifact)
    .delete(authMiddleware.authenticate('jwt', { session: false }), artifactsServices.deleteArtifact)

module.exports = router