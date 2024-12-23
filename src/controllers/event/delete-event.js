function makeDeleteEventAction({ deleteEvent, formatResponse, formatError }) {
    return async function deleteEventController({ req, res }) {
        try {
            // Step 2: Extract necessary fields from the request body
            const eventData = {
                id: req.body['id'],
                name: req.body['name'],
                userId: req.body['userId'],
            };
            console.log(eventData);

            const result = await deleteEvent(eventData);
            console.log('Event deletion successful');

            return res.status(200).json(formatResponse({
                statusCode: 200,
                body: { message: 'Event deletion successful', Event: result },
            }));
        } catch (error) {
            console.log('Error in deleteEventController:', error);
            return res.status(400).json(formatError({ error }));
        }
    };
}

module.exports = makeDeleteEventAction;