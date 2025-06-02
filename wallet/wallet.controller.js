const walletModel = require('./wallet.model');
const walletService = require('./wallet.service');

exports.getAllWallets = async (req, res) => {
    try {
      const wallets = await walletModel.find(); // or your actual logic
      res.status(200).json(wallets);
    }
    
    catch (error) {
      console.error("Service error fetching wallets:", error);
      throw error;
    }
  }

exports.getWalletById = async (req, res) => {
    try {
        const wallet = await walletService.getWalletById(req.params.id);
        if (!wallet) {
            return res.status(404).json({ message: 'Wallet not found' });
        }
        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching wallet', error });
    }
}

exports.createWallet = async (req, res) => {
    try {
      const { _id, artist_id, balance } = req.body;
      const wallet = await walletService.createWallet(_id, artist_id, balance);
      res.status(201).json(wallet);
    } catch (error) {
      res.status(500).json({ message: "Error creating wallet", error });
    }
  }

exports.updateWallet = async (req, res) => {
    try {
        const { id } = req.params;
        const { balance } = req.body;
        const updatedWallet = await walletService.updateWallet(id, balance);
        if (!updatedWallet) {
            return res.status(404).json({ message: 'Wallet not found' });
        }
        res.status(200).json(updatedWallet);
    } catch (error) {
        res.status(500).json({ message: 'Error updating wallet', error });
    }
}

exports.deleteWallet = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedWallet = await walletService.deleteWallet( id );
        if (!deletedWallet) {
            return res.status(404).json({ message: 'Wallet not found' });
        }
        res.status(200).json({ message: 'Wallet deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting wallet', error });
    }
}