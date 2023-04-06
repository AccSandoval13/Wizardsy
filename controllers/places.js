// Creating a router 
const mongoose = require('mongoose'); 
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://UserWiz:UserPassword@wizcluster.23xxeul.mongodb.net';
const User = require ('./models/user'); 


// Importing Database and Collection From MongoDB 
const usersDB = 'users'; 
const usersCollection = 'users';

// Connecting to MongoDB  
MongoClient.connect(url)
  .then(function(client) {
    console.log('Successfully Connected To MongoDB!'); 
  

// Connecting to Database and Collection 
    const userDB = client.db(usersDB);
    const userCollection = userDB.collection(usersCollection);


// Inserting User Model Data Into MongoDB 
    const user = {
      name: "John Doe",
      email: "JohnDoe@example.com",
      age: 23,
      address: {
        street: "123 Main St",
        city: "West Covina",
        state: "CA",
        zip: "91790"
      },
      hobbies: ["Gym", "Running", "Snowboarding"]
    };

    // Inserting user into MongoDB 
    userCollection.insertOne(user)
      .then(function(result) {
        console.log('User Inserted Successfully!');
        client.close();
      })

      .catch(function(err) {
        console.log('Error Inserting User:', err);
        client.close();
      });
  })

  