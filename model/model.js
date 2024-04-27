// model.js

const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  chatId: {
    type: Number,
    unique: true,
    required: true
  },
  subscribed: {
    type: Boolean,
    default: false
  }
});

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
