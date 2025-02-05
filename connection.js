let mysql = require('./node_modules/mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'webuser',
    password: 'BNfO9qwXNdhgfhO0468NDHhgOwjkEt',
    database: 'bdc'
});

connection.connect(function(err) {
    if (err) {
        // console.log(err.message);
        return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
