// node.js application constants
const constants = require('./constants');

// Required node packages
const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

// Define the express application
const app = express();

// Add the body-parser module before the routes
app.use(bodyParser.json());

app.use('/api', routes);

// Start express in listen mode
app.listen(process.env.PORT || 4000, (req, res) => {
  console.log("listening...");
});
