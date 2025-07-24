const { body } = require('express-validator');
const wishlistService = require('./wishlist.service');

exports.getAllWishlist = async (req, res, next) => {
    try {
        const {id} = req.user; 
        
        const wishlists = await wishlistService.getAllWishlist(id);
        res.status(200).json(wishlists);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving wishlists', error });
            next({
      status: 401,
      message: error.message || 'Authentication failed',
    });
    }
};

exports.getWishlistItem = async (req, res) => {
    try {
        const id = req.user; 
        const { id: wishlistId } = req.params;

        // const { user_id } = req.params;
        const wishlistItem = await wishlistService.getWishlistItem(id, wishlistId);
        res.status(200).json(wishlistItem);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving wishlist', error });
    }
};

exports. addWishlistItem = async (req, res) => {
    try {
        const id = req.user;
        const { art_id } = req.body;
        
        const newWishlist = await wishlistService.addWishlistItem(id, art_id);

        if (newWishlist.message === 'Already in wishlist') {
            return res.status(409).json(newWishlist); // Conflict
        }
        if (newWishlist.message === 'Error creating wishlist') {
            return res.status(400).json(newWishlist);
        }

        res.status(201).json(newWishlist);
    } catch (error) {
        res.status(500).json({ message: 'Error creating wishlist', error });
    }
};

// exports.updateWishlist = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { user_id, art_id } = req.body;
//         const updatedWishlist = await wishlistService.updateWishlist(id, user_id, art_id);
//         res.status(200).json(updatedWishlist);
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating wishlist', error });
//     }
// };

exports.removeWishlistItem = async (req, res) => {
    try {
        const id = req.user;
        const { id: art_id } = req.params;

        // const { id } = req.params;
        const deletedWishlist = await wishlistService.removeWishlistItem(id, art_id);
        res.status(200).json(deletedWishlist);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting wishlist', error });
    }
};

// exports.deleteWishlistByArt = async (req, res) => {
//     try {
//         const { user_id, art_id } = req.params;
//         const deleted = await wishlistService.deleteWishlistByArt(user_id, art_id);

//         if (!deleted) {
//             return res.status(404).json({ message: 'Wishlist item not found' });
//         }
//         res.status(200).json({ message: 'Wishlist item removed', data: deleted });
//     } catch (error) {
//         res.status(500).json({ message: 'Error deleting wishlist item', error });
//     }
// };
