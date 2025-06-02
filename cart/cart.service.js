const cart = require('./cart.model');

exports.getAllCarts = async () => {
    try {
        const carts = await cart.find({});
        return carts;
    } catch (error) {
        return { message: 'Error retrieving carts', error };
    }
}
exports.getCartById = async (cart_id) => {
    try {
        console.log("Looking for cart_id:", cart_id); // Debug

        const result = await cart.findOne({  id: cart_id });

        if (!result) {
            return { message: 'Cart not found' };
        }

        return result;
    } catch (error) {
        console.error('Error retrieving cart:', error);
        return { message: 'Error retrieving cart', error };
    }
};
exports.createCart = async ({ id, user_id, art_id, quantity }) => {
    try {
        const newCart = new cart({
            id, 
            user_id,
            art_id,
            quantity
        });
        await newCart.save();
        return newCart;
    } catch (error) {
        return { message: 'Error creating cart', error };
    }
}
exports.updateCart = async (id, { user_id, art_id, quantity }) => {
    try {
        const updatedCart = await cart.findOneAndUpdate(
            { id },
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
}
exports.deleteCart = async (id) => {
    try {
        const deletedCart = await cart.findOneAndDelete({ id });
        if (!deletedCart) {
            return { message: 'Cart not found' };
        }
        return deletedCart;
    }
    catch (error) {
        return { message: 'Error deleting cart', error };
    }
}
