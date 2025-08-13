const db = require("../db/categoryModel");

// CREATE
exports.showCreateForm = (req, res) => {
  res.render("category-create.ejs");
};

exports.createCategory = async (req, res) => {
  try {
    const { category } = req.body;
    const newCategoryId = await db.createCategory(category);

    res.redirect(`/categories/${newCategoryId}`);
  } catch (error) {
    console.error(`Error creating category: ${error.message}`);
    res.status(500).send("Failed to create category");
  }
};

// READ
exports.showCategories = async (req, res) => {
  try {
    const categories = await db.getAllCategories();
    res.render("categories.ejs", { categories });
  } catch (error) {
    console.error(`Error fetching categories: ${error.message}`);
    res.status(500).send("Failed to fetch categories");
  }
};

exports.showCategoryDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await db.getCategoryById(id);
    if (!category) return res.status(404).send("Category not found");

    res.render("categories-details.ejs", { category });
  } catch (error) {
    console.error(`Error fetching category details: ${error.message}`);
    res.status(500).send("Failed to fetch category details");
  }
};

exports.showCategoryItems = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await db.getCategoryById(id);
    const categoryItems = await db.getCategoryItems(id);

    if (!category) return res.status(404).send("Category not found");

    res.render("category-items.ejs", { category, categoryItems });
  } catch (error) {
    console.error(`Error fetching category items: ${error.message}`);
    res.status(500).send("Failed to fetch category items");
  }
};

// UPDATE
exports.showEditForm = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await db.getCategoryById(id);
    if (!category) return res.status(404).send("Category not found");

    res.render("category-edit.ejs", { category });
  } catch (error) {
    console.error(`Error fetching category for edit: ${error.message}`);
    res.status(500).send("Failed to fetch category for edit");
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    await db.updateCategory(id, name);
    res.redirect(`/categories/${id}`);
  } catch (error) {
    console.error(`Error updating category: ${error.message}`);
    res.status(500).send("Failed to update category");
  }
};

// DELETE
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await db.deleteCategory(id);

    res.redirect("/categories");
  } catch (error) {
    console.error(`Error deleting category: ${error.message}`);
    res.status(500).send("Failed to delete category");
  }
};

