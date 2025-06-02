const Rating = require('./rating.model');

exports.getAllRatings = async () => {
    try {
        const ratings = await Rating.find({});
        return ratings;
    } catch (error) {
        throw new Error('Error retrieving ratings');
    }
}
exports.getRatingById = async (rating_id) => {
    try {
        const rating = await Rating.findOne({'review_id': rating_id});
        if (!rating) {
            return { message: 'Rating not found' };
        }
        return rating;
    }
    catch (error) {
        throw new Error('Error retrieving rating');
    }
}
exports.createRating = async (ratingData) => {
    try {
        const newRating = new Rating(ratingData);
        await newRating.save();
        return newRating;
    } catch (error) {
        throw new Error('Error creating rating');
    }
}
exports.updateRating = async (rating_id, ratingData) => {
    try {
        const updatedRating = await Rating.findOneAndUpdate(
            {'review_id':rating_id},
            ratingData,
            { new: true }
        );
        if (!updatedRating) {
            return { message: 'Rating not found' };
        }
        return updatedRating;
    }
    catch (error) {
        throw new Error('Error updating rating');
    }
}
exports.deleteRating = async (rating_id) => {
    try {
        const deletedRating = await Rating.findOneAndDelete({review_id: rating_id});
        if (!deletedRating) {
            return { message: 'Rating not found' };
        }
        return deletedRating;
    } catch (error) {
        throw new Error('Error deleting rating');
    }
}
 