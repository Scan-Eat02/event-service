module.exports = function makeJoinStoreToEvent({ eventsDb }) {
    return async function joinStoreToEvent({
        eventId,
        storeId,
        userId,
    }) {
        try {
            const updatedEvent = await eventsDb.joinStoreToEvent({
                eventId,
                storeId,
                userId,
            });

            if (!updatedEvent) {
                throw new Error('Failed to join store to event. Event not found or store already joined.');
            }

            return updatedEvent;
        } catch (error) {
            console.log("Error during joining store to event:", error);
            throw error;
        }
    };
}; 