const mongoose = require('mongoose');

// Define schema for admin settings
const adminSchema = new mongoose.Schema({
    apiKey: {
        type: String,
        required: true
    }
});

// Create Admin model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
