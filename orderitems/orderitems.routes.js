const express = require('express');
const router = express.Router();
const orderitemsController = require('./orderitems.controller');

router.get('/', orderitemsController.getAllOrderItems);
router.get('/:id', orderitemsController.getOrderItemById);
router.get('/user/:userId', orderitemsController.getOrderItemsByUserId);
router.post('/', orderitemsController.createOrderItem);
router.put('/:id', orderitemsController.updateOrderItem);
router.delete('/:id', orderitemsController.deleteOrderItem);

module.exports = router;
