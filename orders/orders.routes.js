const orderscontroller = require('./orders.controller');
const express = require('express');
const router = express.Router();


router.get('/', orderscontroller.getAllOrders);// GET all orders
router.get('/:order_id', orderscontroller.getOrderById);// GET order by ID
router.post('/', orderscontroller.createOrder);// POST create new order
router.put('/:id', orderscontroller.updateOrder);// PUT update order by ID
router.delete('/:id', orderscontroller.deleteOrder);// DELETE order by ID

module.exports = router;