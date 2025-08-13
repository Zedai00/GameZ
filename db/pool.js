const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "zed",
  database: "gamez",
  password: "12345678",
  port: 5432
})
