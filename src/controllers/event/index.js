const formatResponse = require('../format-response').formatResponse;
const formatError = require('../format-response').formatError;

const {
    createEvent,
    deleteEvent,
    updateEvent,
    getUserEvents,
    getAlEvents
} = require('../../use-cases').eventUseCases;

const makeCreateEventAction = require('./create-event');
const createEventAction = makeCreateEventAction({
    createEvent,
    formatResponse,
    formatError,
});

const makeDeleteEventAction = require('./delete-event');
const deleteEventAction = makeDeleteEventAction({
    deleteEvent,
    formatResponse,
    formatError,
});

const makeUpdateEventAction = require('./update-event');
const updateEventAction = makeUpdateEventAction({
    updateEvent,
    formatResponse,
    formatError,
});

const makeGetUserEventsAction = require('./get-user-events');
const getUserEventsAction = makeGetUserEventsAction({
    getUserEvents,
    formatResponse,
    formatError,
});

const makeGetAllEventsAction = require('./get-all-events');
const getAllEventsAction = makeGetAllEventsAction({
    getAlEvents,
    formatResponse,
    formatError,
});

module.exports = Object.freeze({
    createEventAction,
    deleteEventAction,
    updateEventAction,
    getUserEventsAction,
    getAllEventsAction,
});
