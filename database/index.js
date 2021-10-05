const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'grahamkirsh',
  host: 'localhost',
  database: 'covid',
  password: 'password',
  port: 5432
})

pool.query('SELECT NOW()', (err, res) => {
  console.log('Covid Database is Running on: ', res) // need to install postgres on new machine
})

module.exports = pool;