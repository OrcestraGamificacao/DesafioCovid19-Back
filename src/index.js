const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const mongooseConnect = require('./db/dbMongooseConnection');

const app = express();

app.use(bodyParser.json());

mongooseConnect.connect();

app.use(routes);

app.listen(3000);
module.exports = app;