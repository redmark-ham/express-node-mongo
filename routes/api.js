const express = require('express');
const router = express.Router();
const constants = require('../constants');
const ninjaModel = require('../models/ninja');

// get a list of ninjas from the db
router.get(constants.ningaRoute, (req, res, next) => {
  ninjaModel.find({}).then(function(ninjas) {
    let availableNinjas = new Array();
    for (let i = 0; i < ninjas.length; i++) {
      let ninja = ninjas[i];
      if (ninja._doc.available) {
        availableNinjas.push(ninja);
      }
    }
    if (availableNinjas.length > 0) res.send(availableNinjas);
  }).catch(next);
});

// get a list of ninjas from the db  (Fails with geoNear is not a function)
// router.get(constants.ningaRoute, function(req, res, next){
//   ninjaModel.geoNear(
//       {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
//       {maxDistance: 100000, spherical: true}
//   ).then(function(ninjas){
//       res.send(ninjas);
//   }).catch(next);
// });

// add a new ninja to the db
router.post(constants.ningaRoute, (req, res, next) => {
  ninjaModel
    .create(req.body)
    .then(function(ninja) {
      res.send(ninja);
    })
    .catch(next);
});

// update a ninja in the db
router.put(constants.ninjaRouteId, (req, res, next) => {
  ninjaModel
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function() {
      ninjaModel.findOne({ _id: req.params.id }).then(function(ninja) {
        res.send(ninja);
      });
    })
    .catch(next);
});

// delete a ninja from the db
router.delete(constants.ninjaRouteId, (req, res, next) => {
  ninjaModel
    .findByIdAndRemove({ _id: req.params.id })
    .then(function(ninja) {
      res.send(ninja);
    })
    .catch(next);
});

module.exports = router;
