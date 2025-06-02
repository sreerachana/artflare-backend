const express = require('express');
const router = express.Router();
const walletController = require('./wallet.controller');

// Route to get all wallets
router.get('/', walletController.getAllWallets);
// Route to get a wallet by ID
router.get('/:id', walletController.getWalletById);
// Route to create a new wallet
router.post('/', walletController.createWallet);
// Route to update a wallet by ID
router.put('/:id', walletController.updateWallet);
// Route to delete a wallet by ID
router.delete('/:id', walletController.deleteWallet);

module.exports = router;