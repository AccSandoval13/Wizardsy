const express = require('express');
const mongoose = require('mongoose');


// Create an Express app
const app = express();

// Connecting to the MongoDB database 
// Wrapped our MongoDB connection with IIFE (Immediately Invoked Function Expression)
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully !');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
})(); 

// Define our user schema with basic validation 
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Creating our User model based on the userSchema 
const User = mongoose.model('User', userSchema);

// Handle the POST request to /signup 
app.post('/signup', async (req, res) => {
  const { name, username, email, password } = req.body;

  // Creating a new user object based on our User model 
  const user = new User({
    name,
    username,
    email,
    password
  });

  // Saving the user to our Wizardsy database 
  try {
    await user.save();

  // Redirecting to the profile page 
    res.redirect('/profile');
  } catch (err) {
    console.error(err);
    res.status(500).send('Redirecting to profile page failed !');
  }
});

module.exports = User;
