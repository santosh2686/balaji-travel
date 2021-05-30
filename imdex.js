const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const objectId = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
const compression = require('compression');
const url = require('url');
const qs = require('querystring');
const path = require("path");
const session = require('express-session');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/dist'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, () => {
    console.log('Application Running on port : '+port);
});
