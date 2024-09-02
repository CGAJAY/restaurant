// Importing Mongoose to connect to MongoDB
import mongoose from "mongoose";

// Function to connect to MongoDB
const connectDB = async () => {
	try {
		// Attempt to connect to the MongoDB database using the connection string in .env
		const conn = await mongoose.connect(
			process.env.MONGO_URI
		);
		console.log(
			`MongoDB Connected: ${conn.connection.host}`
		);
		// Log the host of the connected database
	} catch (error) {
		console.error(`Error: ${error.message}`); // Log any connection error
		process.exit(1); // Exit the process with failure
	}
};

export default connectDB; // Export the connection function
