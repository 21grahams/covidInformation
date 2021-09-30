const pool = require('./index');

// Get Request
const getStats = cb => {
  pool.query('SELECT * FROM stats', cb);
}

// Post Request
const postInfo = (userQuery, cb) => {
  pool.query('INSERT INTO new_user (name, email) VALUES ($1, $2)', userQuery, cb);
}

module.exports = {
  getStats,
  postInfo
}