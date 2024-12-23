function makeCreateEventAction({ createEvent, formatResponse, formatError }) {
    return async function createEventController({ req, res }) {
        try {
            // Step 2: Extract necessary fields from the request body
            const eventData = {
                name: req.body['name'],
                description: req.body['description'],
                userId: req.body['userId'],
                visibility: req.body['visibility'],
                location: req.body['location'],
                StoreCount: 0,
                isDisabled: false,
            };
            console.log(eventData);

            const result = await createEvent(eventData);
            console.log('Event creation successful');

            return res.status(201).json(formatResponse({
                statusCode: 201,
                body: { message: 'Event creation successful', Event: result },
            }));
        } catch (error) {
            console.log('Error in createEventController:', error);
            return res.status(400).json(formatError({ error }));
        }
    };
}

module.exports = makeCreateEventAction;