var connection = require('./connection.js');

var orm = {
    selectAll: (tableInput) => {
        var queryString = 'select * from ??';
        connection.query(queryString, [tableInput], (err, rows) => {
            if(err) throw err;
            console.log('Data received from Db:\n');
            rows.forEach((row) => {
                console.log(`${row.burger_name} is ${row.devoured}`);
            });
        });
    },
    insertOne: (tableInput, valOfCol) => {
        var queryString = 'insert into ?? values ??';
        connection.query(queryString, [tableInput, valOfCol], (err, result) => {
            if(err) throw err;
            console.log('Data received from Db:\n');
            console.log(result);
        });
    },
    updateOne: (tableInput, colToSearch, valOfCol) => {
        var queryString = 'update ?? set ?? where ?? = ?';
        connection.query(queryString, [tableInput, colToSearch, valOfCol], (err, result) => {
            if (err) throw err;
            console.log('Data received from Db:\n');
            console.log(result);
        });
    }
};

module.exports = orm;