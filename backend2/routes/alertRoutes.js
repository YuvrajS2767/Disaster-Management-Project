const express = require('express');
const router = express.Router();
const Alert = require('../models/Alert');

router.post('/', async (req, res) => {
  try {
    const alert = new Alert(req.body);
    await alert.save();
    res.status(201).json(alert);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create alert' });
  }
});

router.get('/', async (req, res) => {
  try {
    const alerts = await Alert.find();
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve alerts' });
  }
});

module.exports = router;
