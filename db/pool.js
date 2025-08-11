const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "zed",
  database: "inventory",
  password: "12345678",
  port: 5432
})
