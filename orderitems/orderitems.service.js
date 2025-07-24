const mongoose = require('mongoose');
const OrderItem = require('./orderitems.model');
const Order = require('../orders/orders.model');

const getAllOrderItems = async () => {
    try {
        return await OrderItem.find();
    } catch (error) {
        throw new Error('Error fetching order items: ' + error.message);
    }
};

const getOrderItemById = async (id) => {
    try {
        const orderItem = await OrderItem.findById(id)
            .populate('art_id', 'art_name pricing art_image')
            .populate('order_id', 'order_date status_id');
        if (!orderItem) {
            throw new Error('Order item not found');
        }
        return orderItem;
    } catch (error) {
        throw new Error('Error retrieving order item: ' + error.message);
    }
};

const getOrderItemsByUserId = async (userId) => {
    try {
        const orders = await Order.find({ user_id: userId }, { _id: 1 });
        const orderIds = orders.map(order => order._id);

        return await OrderItem.find({ order_id: { $in: orderIds } })
            .populate('art_id', 'art_name pricing art_image')
            .populate('order_id', 'order_date status_id');
    } catch (error) {
        throw new Error('Error fetching user order items: ' + error.message);
    }
};

const createOrderItem = async (orderItemData) => {
    try {
        const orderItem = new OrderItem(orderItemData);
        await orderItem.save();
        return orderItem;
    } catch (error) {
        throw new Error('Error creating order item: ' + error.message);
    }
};

const updateOrderItem = async (id, orderItemData) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid OrderItem ID format');
        }

        const orderItem = await OrderItem.findByIdAndUpdate(id, orderItemData, { new: true });
        if (!orderItem) {
            throw new Error('Order item not found');
        }

        return orderItem;
    } catch (error) {
        throw new Error('Error updating order item: ' + error.message);
    }
};

const deleteOrderItem = async (id) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid OrderItem ID format');
        }

        const deleted = await OrderItem.findByIdAndDelete(id);
        if (!deleted) {
            throw new Error('Order item not found');
        }

        return true;
    } catch (error) {
        throw new Error('Error deleting order item: ' + error.message);
    }
};

module.exports = {
    getOrderItemById,
    getAllOrderItems,
    getOrderItemsByUserId,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem
};
