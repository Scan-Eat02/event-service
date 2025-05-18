function makeJoinStoreToEventAction({ joinStoreToEvent, formatResponse, formatError }) {
    return async function joinStoreToEventController({ req, res }) {
        try {
            const { eventId, storeId, userId } = req.body;

            if (!eventId || !storeId || !userId) {
                return res.status(400).json(formatError({ 
                    error: 'Missing required fields: eventId, storeId, or userId' 
                }));
            }

            const result = await joinStoreToEvent({ eventId, storeId, userId });
            console.log('Store joined to event successfully');

            return res.status(200).json(formatResponse({
                statusCode: 200,
                body: { 
                    message: 'Store joined to event successfully', 
                    event: result 
                },
            }));
        } catch (error) {
            console.log('Error in joinStoreToEventController:', error);
            return res.status(400).json(formatError({ error }));
        }
    };
}

module.exports = makeJoinStoreToEventAction; 