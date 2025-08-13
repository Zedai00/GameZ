// controllers/itemController.js
const db = require("../db/queries");

module.exports = {
  // Show Create Item Form
  showCreateForm(req, res) {
    res.render("item-create.ejs");
  },

  // CREATE
  async createItem(req, res) {
    try {
      const { item } = req.body;

      if (!item) {
        console.error("Item data missing in request");
        return res.status(400).send("Item data is required");
      }

      const newItemId = await db.createItem(item);
      if (!newItemId) {
        console.error("Failed to create item");
        return res.status(500).send("Failed to create item");
      }

      res.redirect(`/items/${newItemId}`);
    } catch (error) {
      console.error("Error creating item:", error);
      res.status(500).send("Server error");
    }
  },

  // READ: List all items
  async showItems(req, res) {
    try {
      const items = await db.getAllItems();
      if (!items || items.length === 0) {
        return res.status(404).send("No items found");
      }

      res.render("items.ejs", { items });
    } catch (error) {
      console.error("Error fetching items:", error);
      res.status(500).send("Server error");
    }
  },

  // READ: Item details
  async showItemDetails(req, res) {
    try {
      const { id } = req.params;
      const item = await db.getItem(id);

      if (!item) {
        return res.status(404).send("Item not found");
      }

      res.render("item-details.ejs", { item });
    } catch (error) {
      console.error("Error fetching item details:", error);
      res.status(500).send("Server error");
    }
  },

  // UPDATE: Show edit form
  async showEditForm(req, res) {
    try {
      const { id } = req.params;
      const item = await db.getItem(id);

      if (!item) {
        return res.status(404).send("Item not found");
      }

      res.render("item-edit.ejs", { item });
    } catch (error) {
      console.error("Error fetching item for edit:", error);
      res.status(500).send("Server error");
    }
  },

  // UPDATE: Submit changes
  async updateItem(req, res) {
    try {
      const { id } = req.params;
      const { item } = req.body;

      if (!item) {
        return res.status(400).send("Item data is required");
      }

      const updatedItem = await db.updateItem(id, item);
      if (!updatedItem) {
        console.error(`Failed to update item with id ${id}`);
        return res.status(500).send("Failed to update item");
      }

      res.redirect(`/items/${id}`);
    } catch (error) {
      console.error("Error updating item:", error);
      res.status(500).send("Server error");
    }
  },

  // DELETE
  async deleteItem(req, res) {
    try {
      const { id } = req.params;

      const deletedItem = await db.deleteItem(id);
      if (!deletedItem) {
        console.error(`Failed to delete item with id ${id}`);
        return res.status(500).send("Failed to delete item");
      }

      res.redirect("/items");
    } catch (error) {
      console.error("Error deleting item:", error);
      res.status(500).send("Server error");
    }
  }
};

