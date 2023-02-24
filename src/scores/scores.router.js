const scoresServices = require('./scores.services')
const router = require('express').Router()
const authMiddleware = require('../middleware/auth.middleware')
const roleMiddleware = require('../middleware/role.middleware')

router.route('/')
    .get(authMiddleware.authenticate('jwt', { session: false }), scoresServices.getAllScores)
    .post(authMiddleware.authenticate('jwt', { session: false }), scoresServices.postScore)

router.route('/:id')
    .get(authMiddleware.authenticate('jwt', { session: false }), scoresServices.getScoreById)
    .patch(authMiddleware.authenticate('jwt', { session: false }), scoresServices.patchScore)
    .delete(authMiddleware.authenticate('jwt', { session: false }), scoresServices.deleteScore)

module.exports = router