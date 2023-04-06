const mongoose = require('mongoose');
const user = require('./user'); 

// User Schema properties and data types
// Validations to meet certain criteria 
const userSchema = new mongoose.Schema({
  name: { type: String,required: true},
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  address: { 
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true }
  },
  hobbies: { type: [String], required: true }
});

// Capitalize the model name 'User' it is a constructor function 
// Our 'User' model will export our userSchema 
const User = mongoose.model('User', userSchema);

module.exports = User;