const subscribedUsers = {};

exports.subscribeUser = (chatId) => {
  subscribedUsers[chatId] = true;
  return 'You are now subscribed for weather updates!';
};

// Function to handle user unsubscription from weather updates
exports.unsubscribeUser = (chatId) => {
  delete subscribedUsers[chatId];
  return 'You are unsubscribed from weather updates.';
};

// Function to fetch weather updates from the weather API
exports.fetchWeatherUpdate = async () => {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY');
    const weatherData = await response.json();
    return `Current weather in London: ${weatherData.weather[0].main}, ${weatherData.main.temp}°C`;
  } catch (error) {
    console.error('Error fetching weather update:', error);
    return 'Failed to fetch weather update.';
  }
};

const TelegramBot = require('node-telegram-bot-api');

// Create a new Telegram bot instance
const bot = new TelegramBot('YOUR_TELEGRAM_BOT_TOKEN', { polling: true });

// Function to send weather updates to subscribed users
exports.sendWeatherUpdateToSubscribedUsers = async () => {
  try {
    const weatherUpdate = await this.fetchWeatherUpdate();
    for (const chatId in subscribedUsers) {
      // Send weather update to each subscribed user
      bot.sendMessage(chatId, `Weather update: ${weatherUpdate}`);
    }
  } catch (error) {
    console.error('Error sending weather update to subscribed users:', error);
  }
};
