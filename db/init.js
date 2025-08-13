const pool = require("./db");

(async () => {
  try {
    // Drop tables if they exist (in reverse dependency order)
    await pool.query(`
      DROP TABLE IF EXISTS item2developer CASCADE;
      DROP TABLE IF EXISTS item2category CASCADE;
      DROP TABLE IF EXISTS item CASCADE;
      DROP TABLE IF EXISTS category CASCADE;
      DROP TABLE IF EXISTS developer CASCADE;
    `);

    // Category table
    await pool.query(`
      CREATE TABLE category (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `);

    // Item table
    await pool.query(`
      CREATE TABLE item (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price NUMERIC(12, 2) NOT NULL
      );
    `);

    // Developer table
    await pool.query(`
      CREATE TABLE developer (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `);

    // Item ↔ Category (many-to-many)
    await pool.query(`
      CREATE TABLE item2category (
        item INT NOT NULL REFERENCES item(id) ON DELETE CASCADE,
        category INT NOT NULL REFERENCES category(id) ON DELETE CASCADE,
        PRIMARY KEY (item, category)
      );
    `);

    // Item ↔ Developer (many-to-many)
    await pool.query(`
      CREATE TABLE item2developer (
        item INT NOT NULL REFERENCES item(id) ON DELETE CASCADE,
        developer INT NOT NULL REFERENCES developer(id) ON DELETE CASCADE,
        PRIMARY KEY (item, developer)
      );
    `);

    console.log("✅ Database initialized successfully.");
  } catch (err) {
    console.error("❌ Error initializing database:", err);
  } finally {
    await pool.end();
  }
})();

