let mysql = require('./node_modules/mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'pma',
    password: 'mc92nvnrooC2owotDfF2@FjNG',
    database: 'bdc'
});

connection.connect(function(err) {
    if (err) {
        // console.log(err.message);
        return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
