const express = require('express');
const router = express.Router();
const artworkController = require('./artwork.controller');
const {authenticateToken} = require('../auth/auth.middleware')

router.get('/', authenticateToken, artworkController.getAllArtworks);// Get all artworks
router.get('/:artwork_id',  artworkController.getArtworkById);// Get artwork by ID
router.post('/', artworkController.createArtwork);// Create a new artwork
router.put('/:id', artworkController.updateArtwork);// Update artwork by ID
router.delete('/:id', artworkController.deleteArtwork);// Delete artwork by ID

module.exports = router;
