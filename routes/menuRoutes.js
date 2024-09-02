// Importing Express to create routes
import express from "express";
import {
	getMenuItems,
	getMenuItemById,
	createMenuItem,
	updateMenuItem,
	deleteMenuItem,
} from "../controllers/menuController.js"; // Importing the controller functions

const router = express.Router(); // Initialize the Express router

// Route to get all menu items
router.get("/", getMenuItems);

// Route to get a specific menu item by ID
router.get("/:id", getMenuItemById);

// Route to create a new menu item
router.post("/", createMenuItem);

// Route to update an existing menu item by ID
router.put("/:id", updateMenuItem);

// Route to delete a menu item by ID
router.delete("/:id", deleteMenuItem);

export default router; // Export the router to use it in the server
