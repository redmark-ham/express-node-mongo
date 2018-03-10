const express = require('express');
const router = express.Router();
const constants = require('../constants');

router.get(constants.ningaRoute, (req, res) => {
   res.send({
      type: 'GET'
   });
});

router.post(constants.ningaRoute, (req, res) => {
   res.send({
      type: 'POST',
      body: req.body
   });
});

router.put(constants.ninjaRouteId, (req, res) => {
   res.send({
      type: 'PUT',
      body: req.body
   });
});

module.exports = router;