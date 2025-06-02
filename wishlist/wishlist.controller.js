const wishlistService = require('./wishlist.service');

exports.getAllWishlists = async (req, res) => {
    try {
        const wishlists = await wishlistService.getAllWishlists();
        res.status(200).json(wishlists);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving wishlists', error });
    }
}
exports.getWishlistById = async (req, res) => {
    try {
        const { user_id } = req.params;
        const wishlist = await wishlistService.getWishlistById(user_id);
        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving wishlist', error });
    }
}
exports.createWishlist = async (req, res) => {
    try {
        const { _id, user_id, art_id } = req.body;
        const newWishlist = await wishlistService.createWishlist(_id, user_id, art_id);
        if (newWishlist.message === 'Error creating wishlist') {
            return res.status(400).json(newWishlist);
        }
        res.status(201).json(newWishlist);
    } catch (error) {
        console.error('Controller error:', error);
        res.status(500).json({ message: 'Error creating wishlist', error });
    }
}
exports.updateWishlist = async (req, res) => {
    try {
        const { id } = req.params;
        const { user_id, art_id } = req.body;
        const updatedWishlist = await wishlistService.updateWishlist(id, user_id, art_id);
        if (!updatedWishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        res.status(200).json(updatedWishlist);
    } catch (error) {
        res.status(500).json({ message: 'Error updating wishlist', error });
    }
}
exports.deleteWishlist = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedWishlist = await wishlistService.deleteWishlist(id);
        if (!deletedWishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        res.status(200).json(deletedWishlist);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting wishlist', error });
    }
}