// Importing the MenuItem model
import MenuItem from "../models/menuModel.js";

// Controller to get all menu items
export const getMenuItems = async (req, res) => {
	try {
		const menuItems = await MenuItem.find(); // Retrieve all menu items from the database
		res.status(200).json(menuItems); // Respond with the retrieved items in JSON format
	} catch (error) {
		res.status(500).json({ message: error.message }); // Handle any errors and respond with a 500 status code
	}
};

// Controller to get a specific menu item by ID
export const getMenuItemById = async (req, res) => {
	try {
		const menuItem = await MenuItem.findById(req.params.id); // Retrieve a single item by ID
		if (!menuItem) {
			return res
				.status(404)
				.json({ message: "Menu item not found" }); // Respond with a 404 if not found
		}
		res.status(200).json(menuItem); // Respond with the retrieved item
	} catch (error) {
		res.status(500).json({ message: error.message }); // Handle any errors and respond with a 500 status code
	}
};

// Controller to create a new menu item
export const createMenuItem = async (req, res) => {
	try {
		const newMenuItem = new MenuItem(req.body); // Create a new menu item with the data from the request body
		const savedMenuItem = await newMenuItem.save(); // Save the new item to the database
		res.status(201).json(savedMenuItem); // Respond with the saved item and a 201 status code
	} catch (error) {
		res.status(400).json({ message: "error.message" }); // Handle any errors and respond with a 400 status code
	}
};

// Controller to update an existing menu item
export const updateMenuItem = async (req, res) => {
	try {
		const updatedMenuItem =
			await MenuItem.findByIdAndUpdate(
				req.params.id,
				req.body,
				{
					new: true, // Return the updated document
					runValidators: true, // Run schema validators on update
				}
			);
		if (!updatedMenuItem) {
			return res
				.status(404)
				.json({ message: "Menu item not found" }); // Respond with a 404 if not found
		}
		res.status(200).json(updatedMenuItem); // Respond with the updated item
	} catch (error) {
		res.status(400).json({ message: error.message }); // Handle any errors and respond with a 400 status code
	}
};

// Controller to delete a menu item
export const deleteMenuItem = async (req, res) => {
	try {
		const deletedMenuItem =
			await MenuItem.findByIdAndDelete(req.params.id); // Delete the item by ID
		if (!deletedMenuItem) {
			return res
				.status(404)
				.json({ message: "Menu item not found" }); // Respond with a 404 if not found
		}
		res.status(200).json({ message: "Menu item deleted" }); // Respond with a success message
	} catch (error) {
		res.status(500).json({ message: error.message }); // Handle any errors and respond with a 500 status code
	}
};
