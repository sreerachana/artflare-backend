const artworkService = require('./artwork.service');
const { validationResult } = require('express-validator');
const AppError = require('../utils/appError.util');
const sendResponse = require('../utils/sendResponse.utils');

// Get all artworks
exports.getAllArtworks = async (req, res, next) => {
  try {
    const artworks = await artworkService.getAllArtworks();
    return sendResponse(res, 200, true, 'Artworks fetched successfully', artworks);
  } catch (error) {
    next(error);
  }
};

// Get artwork by ID
exports.getArtworkById = async (req, res, next) => {
  try {
    const artwork = await artworkService.getArtworkById(req.params.id);
    return sendResponse(res, 200, true, 'Artwork fetched successfully', artwork);
  } catch (error) {
    next(error);
  }
};

// Get artworks by artist ID
exports.getArtworksByArtistId = async (req, res, next) => {
  try {
    const { artist_id } = req.params;
    if (!artist_id) {
      throw new AppError('Artist ID is required', 400);
    }

    const artworks = await artworkService.getArtworksByArtistId(artist_id);
    return sendResponse(res, 200, true, 'Artworks by artist fetched successfully', artworks);
  } catch (error) {
    next(error);
  }
};

// Create new artwork
exports.createArtwork = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new AppError('Validation failed', 422, errors.array());
    }
``
    const artist_id = req.user.id;
    
    const {
      art_name,
      description,
      pricing,
      quantity,
      category_id
    } = req.body;

    if (!art_name || !description || !pricing || !quantity || !category_id) {
      throw new AppError('All fields are required', 400);
    }

    const art_image = req.file ? req.file.filename : '/artworks/default_artwork.jpeg';

    const artworkData = {
      artist_id,
      art_name,
      description,
      pricing,
      quantity,
      category_id,
      art_image,
      rating: 0
    };

    const createdArtwork = await artworkService.createArtwork(artworkData);
    return sendResponse(res, 201, true, 'Artwork created successfully', createdArtwork);
  } catch (error) {
    next(error);
  }
};

// Update artwork
exports.updateArtwork = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      artist_id,
      art_name,
      art_image,
      pricing,
      description,
      rating,
      quantity,
      category_id
    } = req.body;

    const updatedArtwork = await artworkService.updateArtwork(id, {
      artist_id,
      art_name,
      art_image,
      pricing,
      description,
      rating,
      quantity,
      category_id
    });

    return sendResponse(res, 200, true, 'Artwork updated successfully', updatedArtwork);
  } catch (error) {
    next(error);
  }
};

// Soft delete artwork
exports.deleteArtwork = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedArtwork = await artworkService.deleteArtwork(id);
    return sendResponse(res, 200, true, 'Artwork deleted successfully', deletedArtwork);
  } catch (error) {
    next(error);
  }
};

// Filter artworks
exports.filterArtworks = async (req, res, next) => {
  try {
    const filters = {
      categoryId: req.query.category_id,
      minPrice: req.query.min_price,
      maxPrice: req.query.max_price,
      minRating: req.query.min_rating,
      searchQuery: req.query.search
    };

    const { page = 1, limit = 10 } = req.query;
    const pagination = { page: parseInt(page), limit: parseInt(limit) };

    const artworks = await artworkService.filterArtworks(filters, pagination);

    return sendResponse(res, 200, true, 'Artworks retrieved successfully', artworks);
  } catch (error) {
    next(error);
  }
};

exports.getFeaturedArtworks = async (req, res, next) => {
  try {
    const artworks = await artworkService.getFeaturedArtworks();
    return sendResponse(res, 200, true, 'Featured artworks retrieved', artworks);
  } catch (error) {
    next(error);
  }
};

exports.getPopularArtworks = async (req, res, next) => {
  try {
    const artworks = await artworkService.getPopularArtworks();
    return sendResponse(res, 200, true, 'Popular artworks retrieved', artworks);
  } catch (error) {
    next(error);
  }
};

exports.getNewArtworks = async (req, res, next) => {
  try {
    const artworks = await artworkService.getNewArtworks();
    return sendResponse(res, 200, true, 'New artworks retrieved', artworks);
  } catch (error) {
    next(error);
  }
};

