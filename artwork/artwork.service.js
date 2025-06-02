const Artwork = require('./artwork.model');

exports.getAllArtworks = async () => {
    try {
        const artworks = await Artwork.find({});
        return artworks;
    } catch (error) {
        return { message: 'Error retrieving artworks', error };
    }
}
exports.getArtworkById = async (artwork_id) => {
    try {

        const result = await Artwork.findOne({  id: artwork_id });

        if (!result) {
            return { message: 'Artwork not found' };
        }

        return result;
    } catch (error) {
        return { message: 'Error retrieving artwork', error };
    }
};
exports.createArtwork = async ({ id, artist_id, art_name, art_image, pricing, description, rating, quantity, category_id }) => {
    try {
        const newArtwork = new Artwork({
            id,
            artist_id,
            art_name,
            art_image,
            pricing,
            description,
            rating,
            quantity,
            category_id
        });
        await newArtwork.save();
        return newArtwork;
    } catch (error) {
        return { message: 'Error creating artwork', error: error.message };
    }
    
}
exports.updateArtwork = async (id, { artist_id, art_name, art_image, pricing, description, rating, quantity, category_id }) => {
    try {
        const updatedArtwork = await Artwork.findOneAndUpdate(
            { id },
            { artist_id, art_name, art_image, pricing, description, rating, quantity, category_id },
            { new: true }
          );
          if (!updatedArtwork) {
              return { message: 'Artwork not found' };
          }
          
        return updatedArtwork;
    } catch (error) {
        return { message: 'Error updating artwork', error };
    }
}
exports.deleteArtwork = async (id) => {
    try {
        // const deletedArtwork = await Artwork.findOneAndUpdate(
        //     { id },
        //     { is_deleted: true },
        //     { new: true }
        // );
        const deletedArtwork = await Artwork.deleteOne({ id });
        if (!deletedArtwork) {
            return { message: 'Artwork not found' };
        }
        return deletedArtwork;
    } catch (error) {
        return { message: 'Error deleting artwork', error };
    }
}