// Importing Express.js to create the server
import express from "express";

// Importing dotenv to manage environment variables
import dotenv from "dotenv";

// Importing the MongoDB connection function
import connectDB from "./db/connection.js";

// Importing the menu routes
import menuRoutes from "./routes/menuRoutes.js";

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Set the port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Use the menu routes for any requests to '/menu'
app.use("/menu", menuRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
