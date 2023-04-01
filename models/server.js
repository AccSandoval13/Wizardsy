const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@<cluster-url>/<Wizardsy>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// User model (models/user.js) 
client.connect(err => {
  const collection = client.db("test").collection("users");
  // perform actions on the collection object
  client.close();
});

const database = 'wizardsy';
const collection = 'post';

// The current database to use.
use(database);

// The current collection to use.
use(collection);
