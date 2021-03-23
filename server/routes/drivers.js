const express = require('express');
const router = express.Router();
let drivers = require('../../data/ops-Exercise-drivers.json');

// Route - GET api/drivers
// Get all drivers
router.get('/', (req, res) => res.json(drivers));

module.exports = router;
