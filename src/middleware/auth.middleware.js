const ExtractJwt = require('passport-jwt').ExtractJwt
const JwtStrategy = require('passport-jwt').Strategy
const passport = require('passport')
const config = require('../../config')
const { findUserById } = require('../users/users.controllers')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: config.api.JWTsecret
}

passport.use(
    new JwtStrategy(options, (tokenDecoded, done) => {
        findUserById(tokenDecoded.id)
            .then(user => {
                if (user) {
                    done(null, tokenDecoded)
                } else {
                    done(null, false)
                }
            })
            .catch(err => {
                done(err, false)
            })
    })
)

module.exports = passport