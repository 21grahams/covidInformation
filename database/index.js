const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'grahamkirsh',
  host: 'localhost',
  database: 'covid',
  password: 'password',
  port: 5432
})

pool.query('SELECT NOW()', (err, res) => {
  console.log('Covid Database is Running on: ', res.rows)
})

module.exports = pool;