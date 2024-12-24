const express = require('express');
const router = express.Router();
const { eventController, storeController } = require('../controllers');
const { serviceEndpointPrefix } = require("../config");

// Signup route
router.post(`${serviceEndpointPrefix}/create-event`, (req, res) => eventController.createEventAction({ req, res }));
router.delete(`${serviceEndpointPrefix}/delete-event`, (req, res) => eventController.deleteEventAction({ req, res }));
router.put(`${serviceEndpointPrefix}/update-event`, (req, res) => eventController.updateEventAction({ req, res }));
router.get(`${serviceEndpointPrefix}/get-admin-events`, (req, res) => eventController.getUserEventsAction({ req, res }));
router.get(`${serviceEndpointPrefix}/get-all-events`, (req, res) => eventController.getAllEventsAction({ req, res }));
router.delete(`${serviceEndpointPrefix}/delete-event-stores`, (req, res) => storeController.deleteEventStoresAction({ req, res }));

module.exports = router;
