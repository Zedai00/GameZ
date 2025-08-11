// controllers/categoryController.js
const db = require("../db/queries");

// CREATE
exports.showCreateForm = (req, res) => {
  res.render("category-create.ejs");
};

exports.createCategory = async (req, res) => {
  try {
    const { category } = req.body;
    const err = await db.createCategory(category);

    if (err) {
      console.error(`Category "${category}" not created. Error: ${err}`);
      return res.status(500).send("Failed to create category");
    }

    res.redirect("/categories");
  } catch (error) {
    console.error(`Unexpected error creating category: ${error}`);
    res.status(500).send("Server error");
  }
};

// READ
exports.showCategories = async (req, res) => {
  try {
    const categories = await db.getAllCategories();

    if (!categories) {
      console.error("Categories could not be fetched");
      return res.status(500).send("Failed to fetch categories");
    }

    res.render("categories.ejs", { categories });
  } catch (error) {
    console.error(`Unexpected error fetching categories: ${error}`);
    res.status(500).send("Server error");
  }
};

exports.showCategoryDetails = async (req, res) => {
  const { id } = req.params;
  const category = await db.getCategoryById(id);
  if (!category) return res.status(404).send("Category not found");
  res.render("categories-details.ejs", { category });
};
exports.showCategoryDetails = async (req, res) => {
  const { id } = req.params;
  const category = await db.getCategoryById(id);
  if (!category) return res.status(404).send("Category not found");
  res.render("categories-details.ejs", { category });
};


exports.showCategoryItems = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryItems = await db.getCategoryItems(id);

    if (!categoryItems) {
      console.error(`Items for category ${id} could not be fetched`);
      return res.status(404).send("Category items not found");
    }

    res.render("category-items.ejs", { categoryItems });
  } catch (error) {
    console.error(`Unexpected error fetching category items: ${error}`);
    res.status(500).send("Server error");
  }
};

// UPDATE
exports.showEditForm = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await db.getCategoryById(id);

    if (!category) {
      return res.status(404).send("Category not found");
    }

    res.render("category-edit.ejs", { category });
  } catch (error) {
    console.error(`Unexpected error fetching category for edit: ${error}`);
    res.status(500).send("Server error");
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { newCategory } = req.body;

    const err = await db.updateCategory(id, newCategory);

    if (err) {
      console.error(`Category ${id} could not be updated to "${newCategory}". Error: ${err}`);
      return res.status(500).send("Failed to update category");
    }

    res.redirect("/categories");
  } catch (error) {
    console.error(`Unexpected error updating category: ${error}`);
    res.status(500).send("Server error");
  }
};

// DELETE
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const err = await db.deleteCategory(id);

    if (err) {
      console.error(`Unable to delete category ${id}: ${err}`);
      return res.status(500).send("Failed to delete category");
    }

    res.redirect("/categories");
  } catch (error) {
    console.error(`Unexpected error deleting category: ${error}`);
    res.status(500).send("Server error");
  }
};

