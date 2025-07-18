// Importing required modules
const express = require("express");
const app = express();
const PORT = 3000;

// Importing Database Connection Function
const DBConnection = require("./DB/DBConnection");

// Importing Routes
const productRoutes = require("./routes/product.routes");

// Middleware to parse JSON and URL-encoded data from requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting to MongoDB Database
DBConnection();

// Root route for health check
app.get("/", (req, res) => {
    res.send("Code Working!");
});

// All API routes prefixed with /api
app.use("/api", productRoutes);

// Starting the Express server
app.listen(PORT, () => {
    console.log("Server Running On PORT", PORT);
});
