const cartcontroller = require('./cart.controller');
const express = require('express');
const router = express.Router();



router.get('/', cartcontroller.getAllCarts);// Get all carts
router.get('/:cart_id', cartcontroller.getCartById);// Get cart by ID
router.post('/', cartcontroller.createCart);// Create a new cart
router.put('/:cart_id', cartcontroller.updateCart);// Update a cart
router.delete('/:cart_id', cartcontroller.deleteCart);// Delete a cart

module.exports = router;