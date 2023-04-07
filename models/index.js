require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => { 
    console.log('Mongoose Is Connected')
})

module.exports.Content = require('./content')
module.exports.Post = require('./post')
module.exports.Signup = require('./signup')
module.exports.User = require('./user')


