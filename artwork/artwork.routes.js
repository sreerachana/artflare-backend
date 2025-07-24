const express = require('express');
const router = express.Router();
const path = require('path');

const artworkController = require('./artwork.controller');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

router.get('/', artworkController.getAllArtworks);

router.get('/:id', artworkController.getArtworkById);

router.post('/', authenticate,  artworkController.createArtwork); //authorize('creator'),

router.put('/:id',  authenticate, artworkController.updateArtwork); 

router.delete('/:id',  authenticate, artworkController.deleteArtwork); 

router.get('/artist/:artist_id', authenticate, artworkController.getArtworksByArtistId);

router.get('/explore/filter', artworkController.filterArtworks);

module.exports = router;








// validateFilterArtworks

// const { body, query, validationResult } = require('express-validator');

// exports.validateFilterArtworks = [
//   query('category_id').optional().isInt().withMessage('Category ID must be an integer'),
//   query('min_price').optional().isFloat({ min: 0 }).withMessage('Minimum price must be a positive number'),
//   query('max_price').optional().isFloat({ min: 0 }).withMessage('Maximum price must be a positive number'),
//   query('min_rating').optional().isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5'),
//   query('search').optional().trim().escape(),
//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(422).json({
//         success: false,
//         message: 'Validation failed',
//         errors: errors.array(),
//         data: null
//       });
//     }
//     next();
//   }
// ];