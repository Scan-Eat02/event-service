function makeDeleteEventStoresAction({ deleteEventStores, formatResponse, formatError }) {
    return async function deleteEventStoresController({ req, res }) {
        try {
            // Extract store IDs from the request body
            const { storeIds, userId } = req.body;
            if (!Array.isArray(storeIds) || storeIds.length === 0) {
                return res.status(400).json(formatError({ error: 'Invalid storeIds array' }));
            }

            // Pass the array of store IDs to the use case
            const result = await deleteEventStores({ storeIds, userId });
            console.log('Stores deletion successful');

            return res.status(200).json(formatResponse({
                statusCode: 200,
                body: { message: 'Stores deletion successful', deletedStores: result },
            }));
        } catch (error) {
            console.log('Error in deleteEventController:', error);
            return res.status(400).json(formatError({ error }));
        }
    };
}

module.exports = makeDeleteEventStoresAction;