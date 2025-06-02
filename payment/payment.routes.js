const paymentcontroller = require('./payment.controller');
const express = require('express');
const router = express.Router();

// Define routes for payment
router.get('/', paymentcontroller.getAllPayments); // Get all payments
router.get('/:id', paymentcontroller.getPaymentById); // Get payment by ID
router.post('/', paymentcontroller.createPayment); // Create a new payment
router.put('/:id', paymentcontroller.updatePayment); // Update payment by ID
router.delete('/:id', paymentcontroller.deletePayment); // Delete payment by ID


module.exports = router;