const Rating = require('./rating.model');

exports.getAllRatings = async () => {
  return await Rating.find().populate('user_id', 'name').populate('art_id', 'art_name');
};

exports.getRatingById = async (id) => {
  return await Rating.findById(id).populate('user_id', 'name').populate('art_id', 'art_name');
};

exports.createRating = async (data) => {
  const rating = new Rating(data);
  return await rating.save();
};

exports.updateRating = async (id, data) => {
  return await Rating.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteRating = async (id) => {
  return await Rating.findByIdAndDelete(id);
};
