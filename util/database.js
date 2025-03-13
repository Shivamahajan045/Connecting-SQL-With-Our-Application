const mySql = require("mysql2");

const pool = mySql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "Shivu@123",
});

module.exports = pool.promise();
