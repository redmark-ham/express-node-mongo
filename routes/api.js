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
  ninjaModel.create(req.body).then(function (ninja) {
    res.send(ninja);
  }).catch(next);
});


router.put(constants.ninjaRouteId, (req, res, next) => {
  ninjaModel.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
    ninjaModel.findOne({_id: req.params.id}).then(function (ninja) {
      res.send(ninja);
    });
  }).catch(next);
});


router.delete(constants.ninjaRouteId, (req, res, next) => {
  ninjaModel.findByIdAndRemove({_id: req.params.id}).then(function (ninja) {
    res.send(ninja);
  }).catch(next);
});

module.exports = router;