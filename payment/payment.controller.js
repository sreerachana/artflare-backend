const paymentService = require('./payment.service');

exports.getAllPayments = async (req, res) => {
    try {
        const payments = await paymentService.getAllPayments();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving payments', error });
    }
}
exports.getPaymentById = async (req, res) => {
    const { id } = req.params;
    try {
        const payment = await paymentService.getPaymentById(id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving payment', error });
    }
}
exports.createPayment = async (req, res) => {
    const { id, order_id, payment_amt, status_id, created_at } = req.body;
    try {
        const newPayment = await paymentService.createPayment({ id, order_id, payment_amt, status_id, created_at });
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating payment', error });
    }
}
exports.updatePayment = async (req, res) => {
    const { id } = req.params;
    // const { order_id, payment_amt, status_id, created_at } = req.body;
    console.log('controller;', id, req.body);
    try {
        const updatedPayment = await paymentService.updatePayment(id, req.body); // { order_id, payment_amt, status_id, created_at }
        if (!updatedPayment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(updatedPayment);
    } catch (error) {
        res.status(500).json({ message: 'Error updating payment', error });
    }
}
exports.deletePayment = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPayment = await paymentService.deletePayment(id);
        if (!deletedPayment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting payment', error });
    }
}