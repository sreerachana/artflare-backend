const paymentcontroller = require('./payment.controller');
const express = require('express');
const router = express.Router();

// Define routes for payment
router.get('/', paymentcontroller.getAllPayments);
router.get('/:id', paymentcontroller.getPaymentById);
router.post('/', paymentcontroller.createPayment);
router.put('/:id', paymentcontroller.updatePayment);
router.delete('/:id', paymentcontroller.deletePayment); 


module.exports = router;