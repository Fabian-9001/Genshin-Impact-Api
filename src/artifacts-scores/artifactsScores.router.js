const artifactsScoresServices = require('./artifactsScores.services')
const router = require('express').Router()
const authMiddleware = require('../middleware/auth.middleware')
const roleMiddleware = require('../middleware/role.middleware')

router.route('/')
    .get(authMiddleware.authenticate('jwt', { session: false }), artifactsScoresServices.getAllArtifactsScores)
    .post(authMiddleware.authenticate('jwt', { session: false }), artifactsScoresServices.postArtifactsScore)

router.route('/:id')
    .get(authMiddleware.authenticate('jwt', { session: false }), artifactsScoresServices.getArtifactsScoreById)
    .patch(authMiddleware.authenticate('jwt', { session: false }), artifactsScoresServices.patchArtifactsScore)
    .delete(authMiddleware.authenticate('jwt', { session: false }), artifactsScoresServices.deleteArtifactsScore)

module.exports = router