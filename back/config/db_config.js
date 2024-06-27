const { Pool } = require('pg')
require("dotenv").config();
const pool = new Pool({
  connectionString: process.env.CONN
})
pool.connect(function(err){
    if (err) {
      console.log("Database connection error");
      console.log(err)
    }else
    {
      console.log("Database connected successfully");
    }
  })

module.exports = pool;