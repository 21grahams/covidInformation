const pool = require('./index');

// Get Request
const getStats = cb => {
  pool.query('SELECT * FROM stats', cb);
}

module.exports = {
  getStats
}