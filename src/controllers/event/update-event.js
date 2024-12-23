function makeUpdateEventAction({ updateEvent, formatResponse, formatError }) {
    return async function updateEventController({ req, res }) {
        try {
            // Step 2: Extract necessary fields from the request body
            const eventData = {
                id: req.body['id'],
                name: req.body['name'],
                userId: req.body['userId'],
                description: req.body['description'],
                visibility: req.body['visibility'],
                location: req.body['location'],
                modifiedAt: new Date().toISOString(), // Set modified_at to current timestamp
            };

            console.log('Update Event Request:', eventData);

            const result = await updateEvent(eventData);
            console.log('Event updation successful');

            return res.status(200).json(formatResponse({
                statusCode: 200,
                body: { message: 'Event updation successful', Event: result },
            }));
        } catch (error) {
            console.log('Error in updateEventController:', error);
            return res.status(400).json(formatError({ error }));
        }
    };
}

module.exports = makeUpdateEventAction;
