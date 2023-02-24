const regionsServices = require('./regions.services')
const router = require('express').Router()
const authMiddleware = require('../middleware/auth.middleware')
const roleMiddleware = require('../middleware/role.middleware')

router.route('/')
    .get(authMiddleware.authenticate('jwt', { session: false }), regionsServices.getAllRegions)
    .post(authMiddleware.authenticate('jwt', { session: false }), regionsServices.postRegion)

router.route('/:id')
    .get(authMiddleware.authenticate('jwt', { session: false }), regionsServices.getRegionById)
    .patch(authMiddleware.authenticate('jwt', { session: false }), regionsServices.patchRegion)
    .delete(authMiddleware.authenticate('jwt', { session: false }), regionsServices.deleteRegion)

module.exports = router