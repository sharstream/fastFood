var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.argv.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server started on port: ` + PORT);
});