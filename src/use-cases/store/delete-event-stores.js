module.exports = function makeDeleteEventStores({ eventsDb }) {
    return async function deleteEventStores({ storeIds, userId }) {
        try {
            // Pass the array of store IDs to the DB function
            const deletedStores = await eventsDb.deleteStores({ storeIds, userId });
            return deletedStores;
        } catch (error) {
            console.log('Error during store deletion:', error);
            throw error;
        }
    };
};