
const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

// Route for subscribing user for weather updates
router.post('/subscribe', (req, res) => {
  const { chatId } = req.body;
  const message = controller.subscribeUser(chatId);
  res.send(message);
});

// Route for unsubscribing user from weather updates
router.post('/unsubscribe', (req, res) => {
  const { chatId } = req.body;
  const message = controller.unsubscribeUser(chatId);
  res.send(message);
});

// Route for fetching weather updates
router.get('/weather', async (req, res) => {
  const weatherUpdate = await controller.fetchWeatherUpdate();
  res.send(weatherUpdate);
});

// Route for sending weather updates to subscribed users
router.post('/send-update', async (req, res) => {
  await controller.sendWeatherUpdateToSubscribedUsers();
  res.send('Weather updates sent to subscribed users.');
});

module.exports = router;
