const ratingService = require('./rating.service');

exports.getAllRatings = async (req, res) => {
  try {
    const ratings = await ratingService.getAllRatings();
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRatingById = async (req, res) => {
  const id = req.params.rating_id;
  try {
    const rating = await ratingService.getRatingById(id);
    if (!rating) return res.status(404).json({ message: 'Rating not found' });
    res.status(200).json(rating);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createRating = async (req, res) => {
  try {
    const newRating = await ratingService.createRating(req.body);
    res.status(201).json(newRating);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateRating = async (req, res) => {
  const id = req.params.rating_id;
  try {
    const updatedRating = await ratingService.updateRating(id, req.body);
    if (!updatedRating) return res.status(404).json({ message: 'Rating not found' });
    res.status(200).json(updatedRating);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteRating = async (req, res) => {
  const id = req.params.rating_id;
  try {
    const deleted = await ratingService.deleteRating(id);
    if (!deleted) return res.status(404).json({ message: 'Rating not found' });
    res.status(200).json({ message: 'Rating deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
