const express = require('express');
const router = express.Router();
const adminController = require('../controller/admincontroller');

// Route for getting bot settings
router.get('/settings', (req, res) => {
    const botSettings = adminController.getBotSettings();
    res.send(botSettings);
});

// Route for updating bot settings
router.post('/botsettings', (req, res) => {
    const { apiKey } = req.body;
    const message = adminController.updateBotSettings(apiKey);
    res.send(message);
});

// Route for listing users
router.get('/users', (req, res) => {
    const userList = adminController.listUsers();
    res.send(userList);
});

// Route for blocking a user
router.put('/users/:userId/block', (req, res) => {
    const userId = parseInt(req.params.userId);
    const message = adminController.blockUser(userId);
    res.send(message);
});

// Route for unblocking a user
router.put('/users/:userId/unblock', (req, res) => {
    const userId = parseInt(req.params.userId);
    const message = adminController.unblockUser(userId);
    res.send(message);
});

// Route for deleting a user
router.delete('/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const message = adminController.deleteUser(userId);
    res.send(message);
});

module.exports = router;