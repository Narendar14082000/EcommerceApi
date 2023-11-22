 // Load environment variables from .env file
 require('dotenv').config();
 const mongoose = require('mongoose');

 // Get the MongoDB connection string from the environment variables
 const mongoURI = process.env.MONGODB_URI;

 // Connecting mongoose to the MongoDB server
 mongoose.connect(mongoURI, {
     useNewUrlParser: true,
     useUnifiedTopology: true, // Add this line to avoid deprecation warning
 });

 const db = mongoose.connection;

 db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

 db.once('open', function() {
     console.log('Connected to Database :: MongoDB');
 });

 module.exports = db;