function makeGetUserEventsAction({ getUserEvents, formatResponse, formatError }) {
    return async function getUserEventsController({ req, res }) {
        try {
            // Step 2: Extract necessary fields from the request body
            const eventData = {
                userId: req.body['userId'],
            };

            console.log('Get User Events Request:', eventData);

            const result = await getUserEvents(eventData);
            console.log('Events get by user successful');

            return res.status(200).json(formatResponse({
                statusCode: 200,
                body: { message: 'Events get by user successful', Events: result },
            }));
        } catch (error) {
            console.log('Error in getUserEventsController:', error);
            return res.status(400).json(formatError({ error }));
        }
    };
}

module.exports = makeGetUserEventsAction;
