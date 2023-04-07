const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to the database 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for your user data
const userSchema = new mongoose.Schema({
  name: String,
  username: String, 
  email: String,
  password: String,
});

// A model for your users 
const User = mongoose.model('User', userSchema);

// A route to handle user signup requests 
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // Create a new user object and save it to the database
  const user = new User({
    name,
    email,
    password,
  });

  await user.save();

  // Redirect the user to the profile page
  res.redirect('/profile');
});


// const mongoose = require('mongoose');
// const user = require('./user'); 

// // User Schema properties and data types
// // Validations to meet certain criteria 

// const userSchema = new mongoose.Schema({
//   name: { type: String,required: true},
//   email: { type: String, required: true, unique: true },
//   age: { type: Number, required: true },
//   address: { 
//   street: { type: String, required: true },
//   city: { type: String, required: true },
//   state: { type: String, required: true },
//   zip: { type: String, required: true }
//   },
//   hobbies: { type: [String], required: true }
// });

// // Capitalize the model name 'User' it is a constructor function 
// // Our 'User' model will export our userSchema 
// const User = mongoose.model('User', userSchema);

// module.exports = User;