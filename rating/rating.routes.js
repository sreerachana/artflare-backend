const express = require('express');
const router = express.Router();
const ratingcontroller = require('./rating.controller');

router.get('/', ratingcontroller.getAllRatings);
router.get('/:rating_id', ratingcontroller.getRatingById);
router.post('/', ratingcontroller.createRating);
router.put('/:rating_id', ratingcontroller.updateRating);
router.delete('/:rating_id', ratingcontroller.deleteRating);

module.exports = router;
