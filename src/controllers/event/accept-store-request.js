const makeAcceptStoreRequestAction = ({ acceptStoreRequest, formatResponse, formatError }) => {
    return async function acceptStoreRequestAction({ req, res }) {
        try {
            const { eventId, storeId, userId } = req.body;

            if (!eventId || !storeId || !userId) {
                return res.status(400).json(formatError('Missing required fields'));
            }

            const result = await acceptStoreRequest({ eventId, storeId, userId });

            if (!result) {
                return res.status(404).json(formatError('Store request not found or already processed'));
            }

            return res.status(200).json(formatResponse(result));
        } catch (error) {
            console.error('Error in acceptStoreRequestAction:', error);
            return res.status(500).json(formatError(error.message));
        }
    };
};

module.exports = makeAcceptStoreRequestAction; 