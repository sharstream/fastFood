// MVC models - object relational mapper
var connection = require('./connection.js');

var obj = {
    devoured: "devoured",
    "data type": typeof this,
    burger_name: function () {
        console.log(this.devoured);
    },
    devoured: function () {
        console.log(this["data type"]);
    }
};

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
    selectAll: (tableInput, cb) => {
        var queryString = 'select * from ??';
        console.log(queryString);
        connection.query(queryString, [tableInput], (err, rows) => {
            if(err) throw err;
            console.log('Data received from Db:\n');
            rows.forEach(row => {
                console.log(`${row.burger_name} is ${row.devoured}`);
            });
            cb(rows);
        });
    },
    insertOne: (tableInput, colOfSearch, valOfCol, cb) => {
        var queryString = 'insert into ' + tableInput;

        queryString += " (";
        queryString += colOfSearch.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(valOfCol.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, valOfCol, (err, row) => {
            if(err) throw err;
            console.log('Data received from Db:\n');
            console.log(row);
            cb(row);
        });
    },
    updateOne: (tableInput, objColVals, condition, cb) => {
        var queryString = 'update ' + tableInput;
        // array like object
        // var arrStr = Object.entries(objColVals);
        var arr = [];
        for (const key in objColVals) {
            if (objColVals.hasOwnProperty(key)) {
                const element = objColVals[key];
                if (typeof element === 'string' && element.indexOf(' ') >= 0) {
                    element = "'" + element + "'";
                }
                arr.push(key + '=' + element);
            }
        }
        //then convert to string
        console.log('array like object ' + arrStr);
        console.log('convert to str ' + arrStr.toString());
        queryString += ' set ';
        queryString += arr;
        queryString += ' where ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, row) => {
            if (err) throw err;
            console.log('Data received from Db:\n');
            console.log(row);
            cb(row);
        });
    },
    deleteOne: (tableInput, objColVals, condition, cb) => {
        var queryString = 'delete from ' + tableInput;
        queryString += ' where ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, row) => {
            if(err) throw err;
            console.log(row);
            cb(row);
        });
    }
};

module.exports = orm;