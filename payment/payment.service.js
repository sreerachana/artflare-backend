const paymentmodel = require('./payment.model');

const getPaymentById = async (id) => {
    try {
        const payment = await paymentmodel.findOne({'id':id});
        if (!payment) {
            throw new Error('Payment not found');
        }
        return payment;
    } catch (error) {
        throw new Error('Error fetching payment: ' + error.message);
    }
}
const getAllPayments = async () => {
    try {
        const payments = await paymentmodel.find();
        return payments;
    } catch (error) {
        throw new Error('Error fetching payments: ' + error.message);
    }
}
const createPayment = async ({id,order_id,payment_amt,status_id,created_at,updated_at}) => {
    try {
        const newPayment = new paymentmodel({
            id,
            order_id,
            payment_amt,
            status_id,
            created_at,
            updated_at
        });
        await newPayment.save();
        return newPayment;
    } catch (error) {
        throw new Error('Error creating payment: ' + error.message);
    }
}
const updatePayment = async (id, paymentData) => {
    try {
        console.log(id, paymentData);
        const payment = await paymentmodel.findOneAndUpdate(
            { id }, 
            { $set: paymentData }, 
            { new: true }
        );
        console.log(payment);
        if (!payment) {
            throw new Error('Payment not found');
        }
        return payment;
    }
    catch (error) {
        throw new Error('Error updating payment: ' + error.message);
    }
}
const deletePayment = async (id) => {
    try {
        const payment = await paymentmodel.findOneAndDelete({id});
        if (!payment) {
            throw new Error('Payment not found');
        }
        return payment;
    } catch (error) {
        throw new Error('Error deleting payment: ' + error.message);
    }
}

module.exports = {
    createPayment,
    getPaymentById,
    getAllPayments,
    updatePayment,
    deletePayment
}