const express = require('express');
const router = express.Router();
const homeController = require('./home.controller');

// Main Homepage
router.get('/', homeController.getHomepage);
router.get('/featured-artworks', homeController.getFeaturedArtworks);
router.get('/popular-artists', homeController.getPopularArtists);
router.get('/new-arrivals', homeController.getNewArrivals);

module.exports = router;

