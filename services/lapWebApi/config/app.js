require('./configDatabase');

const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      morgan = require('morgan'),
      bodyParser = require("body-parser"),
      employer = require('../app/routers/employer'),
      handlingError = require('../app/routers/handlingError'),
      conectDB = require('./database');

conectDB();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(morgan('dev'));
app.get('/posts', (req, res) => {
      res.send(
        [{
          title: "Hello World!",
          description: "Hi there! How are you?"
        }]
      )
    })
employer(app);
handlingError(app);

module.exports = app;