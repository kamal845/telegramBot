const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const telegramRoutes = require('./routes/route');
// const fetch =require('node-fetch');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/telegram', telegramRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const telegramBot= require("node-telegram-bot-api");
const TOKEN=process.env.TOKEN;
const bot=new telegramBot(TOKEN,{polling:true});
bot.on('message',(message)=>{
  let chat_id=message.from.id;
  bot.sendMessage(chat_id,"hello");
})