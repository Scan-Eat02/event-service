const formatResponse = require('../format-response').formatResponse;
const formatError = require('../format-response').formatError;

const {
    deleteEventStores,
} = require('../../use-cases').storeUseCases;

const makeDeleteEventStoresAction = require('./delete-event-stores');
const deleteEventStoresAction = makeDeleteEventStoresAction({
    deleteEventStores,
    formatResponse,
    formatError,
});

module.exports = Object.freeze({
    deleteEventStoresAction,
});
