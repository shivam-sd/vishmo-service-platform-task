// Importing mongoose library
const mongoose = require("mongoose");

// Defining the schema for a product/service
const productSchema = new mongoose.Schema({
    
    // Name of the product or service
    productName: {
        type: String,
        required: true,
    },

    // Price of the product or service
    productPrice: {
        type: Number,
        required: true,
    },

    // Name of the service provider or brand
    productProvider: {
        type: String,
        required: true,
    },
});

// Creating a model named 'product' using the defined schema
const productModel = mongoose.model("product", productSchema);

// Exporting the model to use in controllers
module.exports = productModel;
