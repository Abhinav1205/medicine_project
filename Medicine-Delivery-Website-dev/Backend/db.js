const { Pool } = require('pg');
require('dotenv').config();

// Log the connection details (excluding password)
console.log('Database Config:', {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

// Ensure password is a string
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: String(process.env.DB_PASSWORD), // Convert to string explicitly
  port: process.env.DB_PORT,
});

module.exports = pool;