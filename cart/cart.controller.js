const cartService = require('./cart.service');

// Get all cart items
exports.getAllCarts = async (req, res) => {
    try {
        const carts = await cartService.getAllCarts();
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving carts', error });
    }
};

// Get a specific cart item by ID
exports.getCartById = async (req, res) => {
    const cart_id = req.params.cart_id;
    try {
        const cart = await cartService.getCartById(cart_id);
        if (cart.message) {
            return res.status(404).json(cart);
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving cart', error });
    }
};

// Add artwork to cart (called from cart icon click)
exports.createCart = async (req, res) => {
    const { user_id, art_id, quantity } = req.body;
    try {
        const newCart = await cartService.createCart({ user_id, art_id, quantity });
        res.status(201).json(newCart);
    } catch (error) {
        res.status(500).json({ message: 'Error creating cart', error });
    }
};

// Update cart item (quantity/artwork)
exports.updateCart = async (req, res) => {
    const cart_id = req.params.cart_id;
    const { user_id, art_id, quantity } = req.body;
    try {
        const updatedCart = await cartService.updateCart(cart_id, { user_id, art_id, quantity });
        if (updatedCart.message) {
            return res.status(404).json(updatedCart);
        }
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json({ message: 'Error updating cart', error });
    }
};

// Delete a cart item
exports.deleteCart = async (req, res) => {
    const cart_id = req.params.cart_id;
    try {
        const deletedCart = await cartService.deleteCart(cart_id);
        if (deletedCart.message) {
            return res.status(404).json(deletedCart);
        }
        res.status(200).json({ message: 'Cart deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting cart', error });
    }
};
