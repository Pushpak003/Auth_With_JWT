const {Pool} = require('pg');
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});
(async () => {
  try {
    const client = await pool.connect();
    console.log("✅ DB connection successful");
    client.release();
  } catch (err) {
    console.log(`❌ DB connection failed: ${err.message}`);
  }
})();

module.exports = pool;