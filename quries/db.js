const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  dateStrings: true,
  connectionLimit: 10,
  timezone: "local", // 시스템 로컬 시간대 사용
});

module.exports = { pool };
