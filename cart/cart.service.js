const cart = require('./cart.model');

// Get all cart items
exports.getAllCarts = async () => {
    try {
        const carts = await cart.find({});
        return carts;
    } catch (error) {
        return { message: 'Error retrieving carts', error };
    }
};

// Get cart item by internal custom id (not needed anymore but kept for backward compatibility)
exports.getCartById = async (cart_id) => {
    try {
        console.log("Looking for cart_id:", cart_id); // Debug
        const result = await cart.findOne({ _id: cart_id }); // 🔄 changed from `id` to `_id`
        if (!result) {
            return { message: 'Cart not found' };
        }
        return result;
    } catch (error) {
        return { message: 'Error retrieving cart', error };
    }
};

// Create new cart item (called when cart icon is clicked)
exports.createCart = async ({ user_id, art_id, quantity = 1 }) => {
    try {
        // Check if artwork already exists in cart
        const existing = await cart.findOne({ user_id, art_id });
        if (existing) {
            existing.quantity += quantity;
            await existing.save();
            return existing;
        }

        const newCart = new cart({ user_id, art_id, quantity });
        await newCart.save();
        return newCart;
    } catch (error) {
        return { message: 'Error creating cart', error };
    }
};

// Update quantity or art reference (used in future if needed)
exports.updateCart = async (id, { user_id, art_id, quantity }) => {
    try {
        const updatedCart = await cart.findByIdAndUpdate(
            id,
            { user_id, art_id, quantity },
            { new: true }
        );
        if (!updatedCart) {
            return { message: 'Cart not found' };
        }
        return updatedCart;
    } catch (error) {
        return { message: 'Error updating cart', error };
    }
};

// Delete a cart item
exports.deleteCart = async (id) => {
    try {
        const deletedCart = await cart.findByIdAndDelete(id);
        if (!deletedCart) {
            return { message: 'Cart not found' };
        }
        return deletedCart;
    } catch (error) {
        return { message: 'Error deleting cart', error };
    }
};
