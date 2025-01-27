let mysql = require('./node_modules/mysql2');

let connection = mysql.createConnection({
    host: '82.112.234.30',
    user: 'root',
    password: 'aXNkdfmlFpg123XfggNd',
    database: 'bdc'
});

connection.connect(function(err) {
    if (err) {
        // console.log(err.message);
        return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
});
