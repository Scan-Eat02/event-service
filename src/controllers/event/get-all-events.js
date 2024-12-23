function makeGetAllEventsAction({ getAllEvents, formatResponse, formatError }) {
    return async function getAllEventsController({ req, res }) {
        try {
            const result = await getAllEvents();
            console.log('Events get all successful');

            return res.status(200).json(formatResponse({
                statusCode: 200,
                body: { message: 'Events get all successful', Events: result },
            }));
        } catch (error) {
            console.log('Error in getAllEventsController:', error);
            return res.status(400).json(formatError({ error }));
        }
    };
}

module.exports = makeGetAllEventsAction;
