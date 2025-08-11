const db = require("../db/queries");

exports.showCreateForm = (req, res) => {
  res.render("item-create.ejs");
};

exports.createItem = async (req, res) => {
  try {
    const { item } = req.body;
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
};

exports.showItems = async (req, res) => {
  try {
    const items = await db.getAllItems();
    if (!items) {
      console.error("No items found");
      return res.status(404).send("No items found");
    }
    res.render("items.ejs", { items });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Server error");
  }
};

exports.showItemDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await db.getItem(id);
    if (!item) {
      console.error(`Item with id ${id} not found`);
      return res.status(404).send("Item not found");
    }
    res.render("item-details.ejs", { item });
  } catch (error) {
    console.error("Error fetching item details:", error);
    res.status(500).send("Server error");
  }
};

exports.showEditForm = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await db.getItem(id);
    if (!item) {
      console.error(`Item with id ${id} not found for edit`);
      return res.status(404).send("Item not found");
    }
    res.render("item-edit.ejs", { item });
  } catch (error) {
    console.error("Error fetching item for edit:", error);
    res.status(500).send("Server error");
  }
};

exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { item } = req.body;
    const err = await db.updateItem(id, item);
    if (err) {
      console.error(`Failed to update item with id ${id}: ${err}`);
      return res.status(500).send("Failed to update item");
    }
    res.redirect(`/items/${id}`);
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).send("Server error");
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const err = await db.deleteItem(id);
    if (err) {
      console.error(`Failed to delete item with id ${id}: ${err}`);
      return res.status(500).send("Failed to delete item");
    }
    res.redirect("/items");
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).send("Server error");
  }
};

