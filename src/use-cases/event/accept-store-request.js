const makeAcceptStoreRequest = ({ eventsDb, storeRequestsDb }) => {
    return async function acceptStoreRequest({ eventId, storeId, userId }) {
        try {
            const isStoreRequested = await storeRequestsDb.updateStoreRequestStatus({ eventId, storeId });
            if (!isStoreRequested) {
                return null;
            }

            const eventResult = await eventsDb.acceptStoreToEvent({ eventId, storeId, userId });
            
            return eventResult;
        } catch (error) {
            console.error('Error in acceptStoreRequest:', error);
            throw error;
        }
    };
};

module.exports = makeAcceptStoreRequest; 