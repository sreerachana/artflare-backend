const mongoose = require('mongoose');
const Wishlist = require('./wishlist.model');

exports.getAllWishlist = async (user_id) => {
    return await Wishlist.find({user_id:user_id}).populate('art_id');
};

exports.getWishlistItem = async (user_id, item_id) => {
    return await Wishlist.find({ user_id:user_id, item_id:item_id})
                        .populate({
                            path: 'art_id',
                            model: 'Artwork'
                        });
};

exports.addWishlistItem = async (user_id, art_id) => {
    try {
        const exists = await Wishlist.findOne({ user_id, art_id });
        if (exists) return { message: 'Already in wishlist' };

        const newWishlist = new Wishlist({
            _id: new mongoose.Types.ObjectId(),
            user_id,
            art_id
        });

        await newWishlist.save();

        const populatedWishlist = await Wishlist.findById(newWishlist._id).populate('art_id');
        return populatedWishlist;

    } catch (error) {
        return { message: 'Error creating wishlist', error };
    }
};

// exports.updateWishlist = async (id, user_id, art_id) => {
//     return await Wishlist.findByIdAndUpdate(
//         id,
//         { user_id, art_id },
//         { new: true }
//     ).populate('art_id').populate('user_id');
// };

exports.removeWishlistItem = async (user_id, art_id) => {
    return await Wishlist.findOneAndDelete({ user_id, art_id });
};

// exports.deleteWishlistByArt = async (user_id, art_id) => {
//     return await Wishlist.findOneAndDelete({ user_id, art_id });
// };
