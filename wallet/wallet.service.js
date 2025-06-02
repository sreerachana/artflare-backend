const walletModel = require('./wallet.model');

exports.getAllWallet = async () => {
    try {
        const wallets = await walletModel.find();
        return wallets;
    } catch (error) {
        return { message: 'Error retrieving wishlists', error };
    }
}
exports.getWalletById = async (id) => {
    try {
        const wallet = await walletModel.findById(id);
        if (!wallet) {
            return { message: 'Wallet not found' };
        }
        return wallet;
    } catch (error) {
        return { message: 'Error retrieving wishlist', error };
    }
}
exports.createWallet = async (_id, artist_id, balance) => {
    try {
        const newWallet = new walletModel({
            _id,
            artist_id,
            balance
        });
        await newWallet.save();
        return newWallet;
    } catch (error) {
        console.error('Error creating wallet:', error);
        throw error;
    }
}
exports.updateWallet = async (id, balance) => {
    try {
        console.log('Updating wallet with ID:', id);
        const updatedWallet = await walletModel.findOneAndUpdate(
            {_id: id},
            { balance },
            { new: true }
            
        );
        if (!updatedWallet) {
            return { message: 'Wallet not found' };
        }
        return updatedWallet;
    } catch (error) {
        console.error('Error updating wallet:', error);
        throw error;
    }
}
exports.deleteWallet = async (id, artist_id, balance) => {
    try {
        const deletedWallet = await walletModel.findOneAndDelete(
            {_id: id}, 
            {artist_id, balance},
            {new: true}
        );
        if (!deletedWallet) {
            return { message: 'Wallet not found' };
        }
        return deletedWallet;
    } catch (error) {
        return { message: 'Error deleting wishlist', error };
    }
}