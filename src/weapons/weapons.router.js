const weaponsServices = require('./weapons.services')
const router = require('express').Router()
const authMiddleware = require('../middleware/auth.middleware')
const roleMiddleware = require('../middleware/role.middleware')

router.route('/')
    .get(authMiddleware.authenticate('jwt', { session: false }), weaponsServices.getAllWeapons)
    .post(authMiddleware.authenticate('jwt', { session: false }), weaponsServices.postWeapon)

router.route('/:id')
    .get(authMiddleware.authenticate('jwt', { session: false }), weaponsServices.getWeaponById)
    .patch(authMiddleware.authenticate('jwt', { session: false }), weaponsServices.patchWeapon)
    .delete(authMiddleware.authenticate('jwt', { session: false }), weaponsServices.deleteWeapon)

module.exports = router