const orderitemsService = require('./orderitems.service');

const getAllOrderItems = async (req, res) => {
    try {
        const orderItems = await orderitemsService.getAllOrderItems();
        res.status(200).json(orderItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOrderItemById = async (req, res) => {
    try {
        const orderItemId = req.params.id;
        const orderItem = await orderitemsService.getOrderItemById(orderItemId);
        res.status(200).json(orderItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOrderItemsByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const orderItems = await orderitemsService.getOrderItemsByUserId(userId);
        res.status(200).json(orderItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createOrderItem = async (req, res) => {
    try {
        console.log('Creating order item with data:', req.body);
        const orderItemData = req.body;
        const newOrderItem = await orderitemsService.createOrderItem(orderItemData);
        res.status(201).json(newOrderItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateOrderItem = async (req, res) => {
    try {
        const orderItemId = req.params.id;
        const orderItemData = req.body;
        const updatedOrderItem = await orderitemsService.updateOrderItem(orderItemId, orderItemData);
        res.status(200).json(updatedOrderItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteOrderItem = async (req, res) => {
    try {
        const orderItemId = req.params.id;
        await orderitemsService.deleteOrderItem(orderItemId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
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
