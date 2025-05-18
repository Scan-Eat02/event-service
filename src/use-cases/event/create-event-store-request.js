function makeCreateEventStoreRequest({storeRequestsDb}) {
    return async function createEventStoreRequest({ eventId, storeId, userId }) {
        try {
            const result = await storeRequestsDb.createEventStoreRequest({
                eventId,
                storeId,
                userId,
            });

            if (!result) {
                throw new Error('Failed to create event store request');
            }

            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = makeCreateEventStoreRequest; 