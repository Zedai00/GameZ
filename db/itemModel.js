const pool = require("./pool");

// CREATE
async function createItem({ name, description, price }) {
  try {
    const result = await pool.query(
      `INSERT INTO item (name, description, price)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, description, price]
    );
    return result.rows[0];
  } catch (err) {
    console.error("Error creating item:", err);
    throw err;
  }
}

// READ
async function getAllItems() {
  try {
    const result = await pool.query(`SELECT * FROM item ORDER BY id ASC`);
    return result.rows;
  } catch (err) {
    console.error("Error fetching all items:", err);
    throw err;
  }
}

async function getItem(id) {
  try {
    const result = await pool.query(`SELECT * FROM item WHERE id = $1`, [id]);
    if (result.rowCount === 0) throw new Error(`Item with ID ${id} not found`);
    return result.rows[0];
  } catch (err) {
    console.error(`Error fetching item ${id}:`, err);
    throw err;
  }
}

// UPDATE
async function updateItem(id, { name, description, price }) {
  try {
    const result = await pool.query(
      `UPDATE item
       SET name = $1, description = $2, price = $3
       WHERE id = $4
       RETURNING *`,
      [name, description, price, id]
    );
    if (result.rowCount === 0) throw new Error(`Item with ID ${id} not found`);
    return result.rows[0];
  } catch (err) {
    console.error(`Error updating item ${id}:`, err);
    throw err;
  }
}

// DELETE
async function deleteItem(id) {
  try {
    const result = await pool.query(
      `DELETE FROM item WHERE id = $1 RETURNING *`,
      [id]
    );
    if (result.rowCount === 0) throw new Error(`Item with ID ${id} not found`);
    return result.rows[0];
  } catch (err) {
    console.error(`Error deleting item ${id}:`, err);
    throw err;
  }
}

module.exports = {
  createItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem
};

