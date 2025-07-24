const express = require('express');
const router = express.Router();

const wishlistController = require('./wishlist.controller');
const authenticate = require('../middlewares/authenticate');
// const authorize = require('../../middlewares/authorize');


router.get('/', authenticate, wishlistController.getAllWishlist);

router.get('/:user_id', authenticate, wishlistController.getWishlistItem);

router.post('/', authenticate, wishlistController.addWishlistItem);

router.delete('/:id', authenticate, wishlistController.removeWishlistItem);


module.exports = router;










// router.delete('/user/:user_id/art/:art_id', wishlistController.deleteWishlistByArt);


// router.put('/:id', wishlistController.updateWishlist);