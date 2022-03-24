const express = require('express');
const container = require('../../container');
const router = express.Router();
const {OK} = require('./http-status-code');

router.get('/', async (req, res, next) => {
  try {
    const getAllAsteroids = container.resolve('getAllAsteroids');
    const response = await getAllAsteroids.get();
    res.status(OK).json(response);
    } catch (err) {
      next(err);
  }
});

router.get('/today', async (req, res, next) => {
    try {
      const getAllTodayCloseAsteroids = container.resolve('getAllAsteroids');
      const response = await getAllTodayCloseAsteroids.get();
      res.status(OK).json(response);
      } catch (err) {
        next(err);
    }
});

module.exports = router;