const Artwork = require('./artwork.model');
const AppError = require('../utils/appError.util');

// Get all artworks (non-deleted if applicable)
exports.getAllArtworks = async () => {
  return await Artwork.find({ is_deleted: false });
};

// Get a single artwork by ID
exports.getArtworkById = async (id) => {
  const artwork = await Artwork.findOne({ _id: id, is_deleted: false });
  if (!artwork) {
    throw new AppError('Artwork not found', 404);
  }
  return artwork;
};

// Get artworks by artist ID
exports.getArtworksByArtistId = async (artistId) => {
  const artworks = await Artwork.find({ artist_id: artistId, is_deleted: false });
  return artworks;
};

// Create a new artwork
exports.createArtwork = async (data) => {
  const newArtwork = new Artwork(data);
  return await newArtwork.save();
};

// Update an existing artwork by ID
exports.updateArtwork = async (id, updateData) => {
  const updatedArtwork = await Artwork.findOneAndUpdate(
    { _id: id },
    updateData,
    { new: true }
  );
  if (!updatedArtwork) {
    throw new AppError('Artwork not found', 404);
  }
  return updatedArtwork;
};

// Soft delete an artwork
exports.deleteArtwork = async (id) => {
  const deletedArtwork = await Artwork.findOneAndUpdate(
    { _id: id },
    { is_deleted: true, deleted_at: new Date() },
    { new: true }
  );
  if (!deletedArtwork) {
    throw new AppError('Artwork not found', 404);
  }
  return deletedArtwork;
};

// Permanently delete an artwork
exports.hardDeleteArtwork = async (id) => {
  const deletedArtwork = await Artwork.findOneAndDelete({ _id: id });
  if (!deletedArtwork) {
    throw new AppError('Artwork not found', 404);
  }
  return deletedArtwork;
};

// Filter artworks with pagination and query
exports.filterArtworks = async (filters, pagination) => {
  const { categoryId, minPrice, maxPrice, minRating, searchQuery } = filters;
  const { page, limit } = pagination;

  const query = { is_deleted: false };

  if (categoryId) query.category_id = categoryId;
  if (minPrice || maxPrice) {
    query.pricing = {};
    if (minPrice) query.pricing.$gte = parseFloat(minPrice);
    if (maxPrice) query.pricing.$lte = parseFloat(maxPrice);
  }
  if (minRating) query.rating = { $gte: parseFloat(minRating) };
  if (searchQuery) {
    query.$or = [
      { art_name: { $regex: searchQuery, $options: 'i' } },
      { description: { $regex: searchQuery, $options: 'i' } }
    ];
  }

  const options = {
    page,
    limit,
    sort: { created_at: -1 },
    lean: true
  };

  const result = await Artwork.paginate(query, options);

  if (!result.docs || result.docs.length === 0) {
    throw new AppError('No artworks found matching the criteria', 404);
  }

  return {
    artworks: result.docs,
    pagination: {
      totalItems: result.totalDocs,
      totalPages: result.totalPages,
      currentPage: result.page,
      itemsPerPage: result.limit,
      hasNextPage: result.hasNextPage,
      hasPrevPage: result.hasPrevPage
    }
  };
};