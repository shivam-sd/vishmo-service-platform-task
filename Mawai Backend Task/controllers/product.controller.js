// Importing the Product model (Mongoose schema)
const productModel = require("../models/product");


// ========================
// Controller: Save Product
// ========================
const productSaveController = async (req, res) => {
    try {
        // Extracting data from request body
        const { productName, productPrice, productProvider } = req.body;

        // Checking if a product with the same name already exists
        const existProduct = await productModel.findOne({ productName });

        if (existProduct) {
            return res.status(500).send("⚠️ Product Already Exists! Please do not save the same product again.");
        }

        // Creating and saving new product in the database
        const product = await productModel.create({
            productName,
            productPrice,
            productProvider
        });

        // Sending success response
        res.send({ "✅ Product Added Successfully": product });

    } catch (err) {
        // Handling any errors during save
        res.status(500).send("❌ Error in Product Save");
        console.log("Error in Product Save:", err.message);
    }
};


// ========================
// Controller: Get Products
// ========================
const productGetController = async (req, res) => {
    try {
        // Fetching all products from the database
        const products = await productModel.find({});

        // Sending list of products as response
        res.status(200).json({ message: "📦 All Products:", products });

    } catch (err) {
        // Handling any errors during fetch
        res.status(500).json({ error: "❌ Error in Product Get Route" }, err.message);
        console.log("Error in Product Get Controller:", err.message);
    }
};


// Exporting controllers for routing
module.exports = {
    productSaveController,
    productGetController
};
