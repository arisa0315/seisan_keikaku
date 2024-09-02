const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'seisan_keikaku_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

module.exports = connection;
