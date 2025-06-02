const express = require('express');
const router = express.Router();
const wishlistController = require('./wishlist.controller');


// Get all wishlists
router.get('/', wishlistController.getAllWishlists);

// Get wishlist by user ID
router.get('/:user_id', wishlistController.getWishlistById);

// Create a new wishlist
router.post('/', wishlistController.createWishlist);

// Update wishlist by user ID
router.put('/:id', wishlistController.updateWishlist);

// Delete wishlist by user ID
router.delete('/:id', wishlistController.deleteWishlist);

module.exports = router;