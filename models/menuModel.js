// Importing Mongoose to create the schema and model
import mongoose from "mongoose";

// Define the schema for menu items
const menuSchema = new mongoose.Schema({
	name: {
		type: String, // Data type is String
		required: true, // Name is required
	},
	price: {
		type: Number, // Data type is Number
		required: true, // Price is required
	},
	description: {
		type: String, // Data type is String
	},
	category: {
		type: String, // Data type is String
		required: true, // Category is required
	},
});

// Create a model from the schema
const MenuItem = mongoose.model("MenuItem", menuSchema);

export default MenuItem; // Export the model to use it in other parts of the application
