// Import Controller
const eventController = require('./event');
const storeController = require('./store');

// Create Controller Object
const controller = Object.freeze({
    eventController,
    storeController,
});

// Export Controller
module.exports = controller;
