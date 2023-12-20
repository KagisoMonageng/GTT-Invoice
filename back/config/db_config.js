const { Pool } = require('pg')

const pool = new Pool({
  // user: 'admin',
  // host: 'localhost',
  // database: 'gtt-inv',
  // password: 'MusicIsLife@44',
  // port: 5433, // PostgreSQL default port is 5432
  connectionString: 'postgres://hnvdqvxk:eyYnyfkTnj_6urSCn_i0iZ3knHJTbVVI@lallah.db.elephantsql.com/hnvdqvxk'
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