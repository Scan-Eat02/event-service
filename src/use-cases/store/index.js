const allDbs = require('../../data-access');

const makeCreateEvent = require('./create-event');
const createEvent = makeCreateEvent({
    eventsDb: allDbs.eventsDb,
});

module.exports = Object.freeze({
    createEvent,
});
