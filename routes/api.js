const express = require('express');
const router = express.Router();
const constants = require('../constants');
const ninjaModel = require('../models/ninja');

router.get(constants.ningaRoute, (req, res, next) => {
   res.send({
      type: 'GET'
   });
});

router.post(constants.ningaRoute, (req, res, next) => {
  // Add ninja to the db
  ninjaModel.create(req.body).then(function(ninja) {
    res.send(ninja);
  }).catch(next);
});

router.put(constants.ninjaRouteId, (req, res, next) => {
   res.send({
      type: 'PUT',
      body: req.body
   });
});

router.delete(constants.ninjaRouteId, (req, res, next) => {
  res.send({
     type: 'DELETE',
     body: req.body
  });
});

module.exports = router;