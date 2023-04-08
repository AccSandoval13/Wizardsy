require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => { 
    console.log('Mongoose Is Connected')
})

module.exports.Content = require('./models/content')
module.exports.Post = require('./models/post')
module.exports.Signup = require('./models/signup')
module.exports.User = require('./user')


