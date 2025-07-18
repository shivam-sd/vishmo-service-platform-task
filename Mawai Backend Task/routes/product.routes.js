// Importing required modules
const express = require("express");
const router = express.Router();

// Importing controller functions for product routes
const { 
  productSaveController, 
  productGetController 
} = require("../controllers/product.controller");

// Route to handle POST request for saving a new service/product
// Endpoint: /api/services
router.post("/services", productSaveController);

// Route to handle GET request to fetch all services/products
// Endpoint: /api/services
router.get("/services", productGetController);

// Exporting the router to be used in main app.js
module.exports = router;
