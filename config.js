require('dotenv').config()

module.exports = {
    api: {
        host: process.env.API_HOST || 'http://localhost:9001',
        port: process.env.API_PORT || 9001,
        JWTsecret: process.env.JWT_SECRET,
        email: process.env.EMAIL,
        emailPassword: process.env.EMAIL_PASSWORD
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'root',
        name: process.env.DB_NAME || 'Genshin Impact API'
    }
}