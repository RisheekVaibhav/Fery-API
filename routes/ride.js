const express = require('express');
const router = express.Router();
const rideController = require('../controllers/rideController');

router.get('/', rideController.getRides);
router.get('/:rideId', rideController.getRideDetails);

module.exports = router;