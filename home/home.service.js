// const Property = require('../properties/property.model');
const connectDB = require('../config/mongoose');
const Artwork = require('../artwork/artwork.model');
const User = require('../users/user.model');
 
exports.getHomepageData = async () => {
    const conn = await connectDB();

    const db = conn.connection.db;
 
    const [users, roles] = await Promise.all([
      db.collection('users').find({}).toArray(),
      db.collection('roles').find({}).toArray(),
    ]);

  return {
    users,
    roles,
    stats: {
      totalProperties: 100, // await Property.countDocuments()
      happyCustomers: 1250 // This could come from DB later
    }
  };
};
exports.fetchFeaturedArtworks = async () => {
  // Logic: Get top 5 most liked artworks
  return await Artwork.find().sort({ likes: -1 }).limit(5);
};

exports.fetchPopularArtists = async () => {
  // Logic: Get artists with most artworks
  return await User.aggregate([
    { $match: { role: 'artist' } },
    {
      $lookup: {
        from: 'artworks',
        localField: '_id',
        foreignField: 'artistId',
        as: 'artworks',
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        email: 1,
        totalArtworks: { $size: '$artworks' },
      },
    },
    { $sort: { totalArtworks: -1 } },
    { $limit: 5 },
  ]);
};

exports.fetchNewArrivals = async () => {
  // Logic: Get 5 latest artworks
  return await Artwork.find().sort({ createdAt: -1 }).limit(5);
};



