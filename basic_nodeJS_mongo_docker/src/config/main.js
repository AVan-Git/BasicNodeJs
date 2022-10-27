require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:2718/example',
    env: process.env.NODE_ENV || 'development',
}