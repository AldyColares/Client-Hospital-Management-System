require('./configDatabase');

const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      morgan = require('morgan'),
      bodyParser = require("body-parser"),
      employer = require('../app/routers/employer'),
      conectDB = require('./database');

conectDB();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
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

module.exports = app;