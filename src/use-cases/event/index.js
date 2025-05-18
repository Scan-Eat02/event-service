const allDbs = require('../../data-access');

const makeCreateEvent = require('./create-event');
const createEvent = makeCreateEvent({
    eventsDb: allDbs.eventsDb,
});

const makeDeleteEvent = require('./delete-event');
const deleteEvent = makeDeleteEvent({
    eventsDb: allDbs.eventsDb,
});

const makeUpdateEvent = require('./update-event');
const updateEvent = makeUpdateEvent({
    eventsDb: allDbs.eventsDb,
});

const makeGetUserEvents = require('./get-user-events');
const getUserEvents = makeGetUserEvents({
    eventsDb: allDbs.eventsDb,
});

const makeGetAllEvents = require('./get-all-events');
const getAllEvents = makeGetAllEvents({
    eventsDb: allDbs.eventsDb,
});

const makeJoinStoreToEvent = require('./join-store-to-event');
const joinStoreToEvent = makeJoinStoreToEvent({
    eventsDb: allDbs.eventsDb,
});

const makeAcceptStoreRequest = require('./accept-store-request');
const acceptStoreRequest = makeAcceptStoreRequest({
    eventsDb: allDbs.eventsDb,
    storeRequestsDb: allDbs.storeRequestsDb,
});

const makeCreateEventStoreRequest = require('./create-event-store-request');
const createEventStoreRequest = makeCreateEventStoreRequest({
    storeRequestsDb: allDbs.storeRequestsDb,
});

module.exports = Object.freeze({
    createEvent,
    deleteEvent,
    updateEvent,
    getUserEvents,
    getAllEvents,
    joinStoreToEvent,
    acceptStoreRequest,
    createEventStoreRequest,
});
