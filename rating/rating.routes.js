const ratingcontroller = require('./rating.controller');
const express = require('express');
const router = express.Router();


router.get('/', ratingcontroller.getAllRatings);// Route to get all ratings
router.get('/:rating_id', ratingcontroller.getRatingById);// Route to get a rating by ID
router.post('/', ratingcontroller.createRating);// Route to create a new rating
router.put('/:rating_id', ratingcontroller.updateRating);// Route to update a rating by ID
router.delete('/:rating_id', ratingcontroller.deleteRating);// Route to delete a rating by ID


// Export the router
module.exports = router;