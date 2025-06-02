const wishlistModel = require('./wishlist.model');

exports.getAllWishlists = async () => {
    try {
        const wishlists = await wishlistModel.find();
        return wishlists;
    } catch (error) {
        return { message: 'Error retrieving wishlists', error };
    }
}

exports.getWishlistById = async (user_id) => {
    try {
        const wishlist = await wishlistModel.findOne({ user_id });
        if (!wishlist) {
            return { message: 'Wishlist not found' };
        }
        return wishlist;
    }
    catch (error) {
        return { message: 'Error retrieving wishlist', error };
    }
}
exports.createWishlist = async (_id, user_id, art_id) => {
    try {
        const newWishlist = new wishlistModel({
            _id,
            user_id,
            art_id
        });
        await newWishlist.save();
        return newWishlist;
    } catch (error) {
        console.error('Wishlist creation error:', error);
        return { message: 'Error creating wishlist', error };
    }
}
exports.updateWishlist = async (id, user_id, art_id) => {
    try {
        const updatedWishlist = await wishlistModel.findOneAndUpdate(
            { _id: id },
            { user_id , art_id },
            { new: true }
        );
        if (!updatedWishlist) {
            return { message: 'Wishlist not found' };
        }
        return updatedWishlist;
    } catch (error) {
        return { message: 'Error updating wishlist', error };
    }
}
exports.deleteWishlist = async (id, user_id, art_id) => {
    try {
        const deletedWishlist = await wishlistModel.findOneAndDelete(
            { _id: id }, 
            {user_id, art_id },
            { new: true }
        );
        if (!deletedWishlist) {
            return { message: 'Wishlist not found' };
        }
        return deletedWishlist; 
    } catch (error) {
        return { message: 'Error deleting wishlist', error };
    }
}