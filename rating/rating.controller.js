const ratingService = require('./rating.service');

exports.getAllRatings = async (req, res) => {
    try {
        const ratings = await ratingService.getAllRatings();
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving payments', error });
    }
}
exports.getRatingById = async (req, res) => {
    const rating_id = req.params.rating_id;
    try {
        const rating = await ratingService.getRatingById(rating_id);
        if (rating.message) {
            return res.status(404).json({ message: rating.message });
        }
        res.status(200).json(rating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.createRating = async (req, res) => {
    const ratingData = req.body;
    try {
        const newRating = await ratingService.createRating(ratingData);
        res.status(201).json(newRating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.updateRating = async (req, res) => {
    const rating_id = req.params.rating_id;
    const ratingData = req.body;
    try {
        const updatedRating = await ratingService.updateRating(rating_id, ratingData);
        if (updatedRating.message) {
            return res.status(404).json({ message: updatedRating.message });
        }
        res.status(200).json(updatedRating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.deleteRating = async (req, res) => {
    const rating_id = req.params.rating_id;
    try {
        const deletedRating = await ratingService.deleteRating(rating_id);
        if (deletedRating.message) {
            return res.status(404).json({ message: deletedRating.message });
        }
        res.status(200).json(deletedRating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}