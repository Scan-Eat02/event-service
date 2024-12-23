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

module.exports = Object.freeze({
    createEvent,
    deleteEvent,
    updateEvent,
    getUserEvents,
    getAllEvents,
});
