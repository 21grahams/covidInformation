const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'graham_kirsh',
  host: 'localhost',
  database: 'covid',
  password: 'password',
  port: 5432
})

pool.query('SELECT NOW()', (err, res) => {
  console.log('Covid Database is Running on: ', res.rows) // need to install postgres on new machine
})

module.exports = pool;