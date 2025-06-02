const homeService = require('./home.service');

exports.getHomepage = async (req, res) => {
    try {
        const homepageData = await homeService.getHomepageData();
        res.status(200).json({
            success: true,
            data: homepageData});
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: 'failed to load homepage data'
        });
    }
};
exports.getFeaturedArtworks = async (req, res) => {
  try {
    const artworks = await homeService.fetchFeaturedArtworks();
    res.json(artworks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch featured artworks' });
  }
};

exports.getPopularArtists = async (req, res) => {
  try {
    const artists = await homeService.fetchPopularArtists();
    res.json(artists);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch popular artists' });
  }
};

exports.getNewArrivals = async (req, res) => {
  try {
    const artworks = await homeService.fetchNewArrivals();
    res.json(artworks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch new arrivals' });
  }
};
