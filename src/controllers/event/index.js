const formatResponse = require('../format-response').formatResponse;
const formatError = require('../format-response').formatError;

const {
    createEvent,
    deleteEvent,
    updateEvent,
    getUserEvents,
    getAllEvents,
    joinStoreToEvent,
    acceptStoreRequest,
    createEventStoreRequest,
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
    getAllEvents,
    formatResponse,
    formatError,
});

const makeJoinStoreToEventAction = require('./join-store-to-event');
const joinStoreToEventAction = makeJoinStoreToEventAction({
    joinStoreToEvent,
    formatResponse,
    formatError,
});

const makeAcceptStoreRequestAction = require('./accept-store-request');
const acceptStoreRequestAction = makeAcceptStoreRequestAction({
    acceptStoreRequest,
    formatResponse,
    formatError,
});

const makeEventStoreRequestAction = require('./create-event-store-request');
const eventStoreRequestAction = makeEventStoreRequestAction({
    createEventStoreRequest,
    formatResponse,
    formatError,
});

module.exports = Object.freeze({
    createEventAction,
    deleteEventAction,
    updateEventAction,
    getUserEventsAction,
    getAllEventsAction,
    joinStoreToEventAction,
    acceptStoreRequestAction,
    eventStoreRequestAction,
});
