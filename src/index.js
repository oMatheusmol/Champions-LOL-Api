/* eslint-disable no-console */
const express = require('express');

const router = new express.Router();
const app = express();
const database = require('./db');

const port = process.env.PORT || 3000;
const routeChampions = require('./routers/router');

app.use(express.json());
routeChampions(router);
app.use(router);

const server = app.listen(port, () => {
  console.log('Listening on port %s', server.address().port);
});

database.connect('mongodb://127.0.0.1:27017/Champions-LOL-api', () => server);

module.exports = { server };
