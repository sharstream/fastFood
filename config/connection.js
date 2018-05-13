var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'burgers_db'
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db ' + err.stack);
        return;
    }
    console.log('Connection established as id ' + connection.threadId);
});

connection.end((err) => {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
});

module.exports = connection;