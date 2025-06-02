const ordersService = require('./orders.service');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await ordersService.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving orders', error });
    }
}
exports.getOrderById = async (req, res) => {
    const { order_id } = req.params;
    try {
        const order = await ordersService.getOrderById(order_id);
        if (order.message) {
            return res.status(404).json(order);
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving order', error });
    }
}
exports.createOrder = async (req, res) => {
    const { id, user_id, total_amt, status_id, created_at, order_date } = req.body;
    try {
        const newOrder = await ordersService.createOrder({ id, user_id, total_amt, status_id, created_at, order_date });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
}
exports.updateOrder = async (req, res) => {
    const { id } = req.params;
    const { user_id, total_amt, status_id, created_at, order_date } = req.body;
    try {
        const updatedOrder = await ordersService.updateOrder(id, { user_id, total_amt, status_id, created_at, order_date });
        if (updatedOrder.message) {
            return res.status(404).json(updatedOrder);
        }
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order', error });
    }
}
exports.deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedOrder = await ordersService.deleteOrder(id);
        if (deletedOrder.message) {
            return res.status(404).json(deletedOrder);
        }
        res.status(200).json({ message: 'Order deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting order', error });
    }
}