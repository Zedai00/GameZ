// models/categoryModel.js
const pool = require('../db');

// Create a new category
async function createCategory(name) {
  const result = await pool.query(
    'INSERT INTO category (name) VALUES ($1) RETURNING *',
    [name]
  );
  return result.rows[0];
}

// Get all categories
async function getAllCategories() {
  const result = await pool.query('SELECT * FROM category ORDER BY id');
  return result.rows;
}

// Get category by ID
async function getCategoryById(id) {
  const result = await pool.query(
    'SELECT * FROM category WHERE id = $1',
    [id]
  );
  return result.rows[0];
}

// Update a category
async function updateCategory(id, name) {
  const result = await pool.query(
    'UPDATE category SET name = $1 WHERE id = $2 RETURNING *',
    [name, id]
  );
  return result.rows[0];
}

// Delete a category
async function deleteCategory(id) {
  const result = await pool.query(
    'DELETE FROM category WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};

