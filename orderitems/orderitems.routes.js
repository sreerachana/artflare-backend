const express = require('express');
const router = express.Router();
const orderitemsController = require('./orderitems.controller');


router.get('/', orderitemsController.getAllOrderItems);// Get all order items
router.get('/:id', orderitemsController.getOrderItemById);// Get an order item by ID
router.post('/', orderitemsController.createOrderItem);// Create a new order item
router.put('/:id', orderitemsController.updateOrderItem);// Update an order item by ID 
router.delete('/:id', orderitemsController.deleteOrderItem);// Delete an order item by ID

// Export the router
module.exports = router;