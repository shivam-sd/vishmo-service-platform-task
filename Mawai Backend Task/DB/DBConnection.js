// Importing the mongoose library for MongoDB connection
const mongoose = require("mongoose");

// Function to establish connection with MongoDB database
const DBConnection = () => {
    try {
        // Connecting to local MongoDB with database name 'Vishmo'
        mongoose.connect("Add Your DataBase Connection Credential.");

        // Logging success message on successful connection
        console.log("Database Connected Successfully");
    } catch (err) {
        // Logging error message if connection fails
        console.log("Error while connecting to the Database");
    }
};

// Exporting the DBConnection function for use in main server file
module.exports = DBConnection;
