function makeEventStoreRequestAction({createEventStoreRequest, formatResponse, formatError}) {
    return async function eventStoreRequestAction({ req, res }) {
        try {
            const { eventId, storeId, userId } = req.body;

            if (!eventId || !storeId) {
                return res.status(400).json(formatError({ error: 'Event ID and Store ID are required'}));
            }

            const result = await createEventStoreRequest({
                eventId,
                storeId,
                userId,
            });

            return res.status(201).json(formatResponse({
                message: 'Event store request created successfully',
                data: result,
            }));
        } catch (error) {
            console.error('Error in createEventStoreRequestAction:', error);
            return res.status(400).json(formatError({ error }));
        }
    }
}

module.exports = makeEventStoreRequestAction; 