const express = require('express');
const app = express();
const CoinRouter = express.Router();
const db_conn = require('database_connection');

CoinRouter.route('/').get(function (req, res) {
  res.render('index');
});

module.exports = CoinRouter;
