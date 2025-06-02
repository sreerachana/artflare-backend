const artworkService = require('./artwork.service');

exports.getAllArtworks = async (req, res) => {
    try {
        const artworks = await artworkService.getAllArtworks();
        res.status(200).json(artworks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving artworks', error });
    }
}
exports.getArtworkById = async (req, res) => {
    try {
        const { artwork_id } = req.params;
        console.log('Received ID:', req.params.id, artwork_id);
        const artwork = await artworkService.getArtworkById(artwork_id);        
        
        if (artwork.message) {
            return res.status(404).json(artwork);
        }
        res.status(200).json(artwork);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving artwork', error });
    }
}
exports.createArtwork = async (req, res) => {
    try {
        const { id, artist_id, art_name, art_image, pricing, description, rating, quantity, category_id } = req.body;
        const newArtwork = await artworkService.createArtwork({ id, artist_id, art_name, art_image, pricing, description, rating, quantity, category_id });
        res.status(201).json(newArtwork);
    } catch (error) {
        res.status(500).json({ message: 'Error creating artwork', error: error.message });
    }
}
exports.updateArtwork = async (req, res) => {
    try {
        const { id } = req.params;
        const { artist_id, art_name, art_image, pricing, description, rating, quantity, category_id } = req.body;
        const updatedArtwork = await artworkService.updateArtwork(id, { artist_id, art_name, art_image, pricing, description, rating, quantity, category_id });
        if (updatedArtwork.message) {
            return res.status(404).json(updatedArtwork);
        }
        res.status(200).json(updatedArtwork);
    } catch (error) {
        res.status(500).json({ message: 'Error updating artwork', error });
    }
}
exports.deleteArtwork = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedArtwork = await artworkService.deleteArtwork(id);
        if (deletedArtwork.message) {
            return res.status(404).json(deletedArtwork);
        }
        res.status(200).json(deletedArtwork);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting artwork', error });
    }
    // controllers/artworkController.js

exports.getByArtist = async (req, res) => {
  try {
    const artworks = await artworks.find({ artist: req.params.artistId });
    res.json(artworks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
}
