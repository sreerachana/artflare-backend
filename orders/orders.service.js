const Order = require('./orders.model');

exports.getAllOrders = async () => {
    try {
        const orders = await Order.find({});
        return orders;
    } catch (error) {
        return { message: 'Error retrieving orders', error };
    }
}
exports.getOrderById = async (order_id) => {
    try {
        console.log("Looking for order_id:", order_id); // Debug

        const result = await Order.findOne({ id: order_id });
        if (!result) {
            return { message: 'Order not found' };
        }
        return result;
    }
    catch (error) {
        console.error('Error retrieving order:', error);
        return { message: 'Error retrieving order', error };
    }
}
exports.createOrder = async ({ id, user_id, total_amt, status_id, created_at, order_date }) => {
    try {
        const newOrder = new Order({
            id,
            user_id,
            total_amt,
            status_id,
            created_at,
            order_date
        });
        await newOrder.save();
        return newOrder;
    } catch (error) {
        return { message: 'Error creating order', error };
    }
}
exports.updateOrder = async (id, { user_id, total_amt, status_id, created_at, order_date }) => {
    try {
        const updatedOrder = await Order.findOneAndUpdate(
            { id },
            { user_id, total_amt, status_id, created_at, order_date },
            { new: true }
        );
        if (!updatedOrder) {
            return { message: 'Order not found' };
        }
        return updatedOrder;
    } catch (error) {
        return { message: 'Error updating order', error };
    }
}
exports.deleteOrder = async (id) => {
    try {
        const deletedOrder = await Order.findOneAndDelete({ id });
        if (!deletedOrder) {
            return { message: 'Order not found' };
        }
        return deletedOrder;
    }
    catch (error) {
        return { message: 'Error deleting order', error };
    }
}