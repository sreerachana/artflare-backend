const mongoose = require('mongoose');
const OrderItem = require('./orderitems.model');

const getAllOrderItems = async () => {
    try {
        const orderItems = await OrderItem.find();
        return orderItems;
    } catch (error) {
        throw new Error('Error fetching order items: ' + error.message);
    }
}
const getOrderItemById = async (order_items_id) => {
    try {
        const orderItem = await OrderItem.findOne({'order_item_id': order_items_id});
        if (!orderItem) {
            throw new Error('Order item not found');
        }
        return orderItem;
    } catch (error) {
        throw new Error('Error retrieving Order Item');
    }
}
const createOrderItem = async (orderItemData) => {
    try {
        const orderItem = new OrderItem(orderItemData);
        await orderItem.save();
        return orderItem;
    } catch (error) {
        throw new Error('Error creating Order Item: ' + error.message);
    }    
}
// const updateOrderItem = async (id, orderItemData) => {
//     try {
//         const orderItem = await OrderItem.findOneAndUpdate({order_Item_Id: Number(id)}, orderItemData, { new: true });
//         if (!orderItem) {
//             throw new Error('Order item not found');
//         }
//         return orderItem;
//     } catch (error) {
//         throw new Error('Error updating order item: ' + error.message);
//     }
// }

// const mongoose = require('mongoose');
// const OrderItem = require('./orderitems.model'); // adjust path if needed

const updateOrderItem = async (id, orderItemData) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid OrderItem ID format');
        }

        const orderItem = await OrderItem.findOneAndUpdate(id, orderItemData, { new: true });
        if (!orderItem) {
            throw new Error('Order item not found');
        }

        return orderItem;
    } catch (error) {
        throw new Error('Error updating order item: ' + error.message);
    }
};
// const deleteOrderItem = async (orderItemId) => {
//     try {
//         const orderItem = await OrderItem.findOneAndDelete({ order_item_id: Number(orderItemId) });
//         if (!orderItem) {
//             throw new Error('Order item not found');
//         }
//         return orderItem;
//     } catch (error) {
//         throw new Error('Error deleting order item: ' + error.message);
//     }
// }
const deleteOrderItem = async (id) => {
    try {
        const numericId = Number(id);

        if (isNaN(numericId)) {
            throw new Error('Invalid order_item_id: not a number');
        }

        const deleted = await OrderItem.deleteOne({ order_item_id: numericId });

        if (deleted.deletedCount === 0) {
            throw new Error('Order item not found');
        }

        return true;
    } catch (error) {
        throw new Error('Error deleting order item: ' + error.message);
    }
};


module.exports = {
    createOrderItem,
    getOrderItemById,
    getAllOrderItems,
    updateOrderItem,
    deleteOrderItem
}