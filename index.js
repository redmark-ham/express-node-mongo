// node.js application constants
const constants = require('./constants');

// Required node packages
const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Define the express application
const app = express();

// Connect to MongoDB
// mongodb://admin:Ph1ph1ka@192.168.0.12:27017/ninjago
mongoose.connect('mongodb://localhost:27017/ninjago', function(error) {
  if (error) console.log(error);
});

// Middleware section
// Add the body-parser middleware 
app.use(bodyParser.json());

// Routes middleware
app.use('/api', routes);

// Error middleware
app.use(function(err, req, res, next) {
  //console.log(err);
  res.status(422).send({error: err.message});
});

// Start express in listen mode
app.listen(process.env.PORT || 4000, (req, res) => {
  console.log('listening...');
});
