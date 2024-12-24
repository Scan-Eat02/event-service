const EVENT_TABLE = 'Event';

function makeEventsDb({ cockroach, UnknownError }) {
    return Object.freeze({
        createEvent,
        deleteEvent,
        updateEvent,
        getAllEvents,
        getUserEvents,
        deleteEventStores,
    });

    // Create a new Event
    async function createEvent({
        name,
        description,
        userId,
        visibility,
        location,
        isDisabled,
        storeCount,
    }) {
        const query = `
            INSERT INTO ${EVENT_TABLE}
            (name, description, user_id, visibility, location, is_disabled, store_count)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id, name, user_id, visibility, location, is_disabled, store_count, store_ids;
        `;
        const values = [name, description, userId, visibility, location, isDisabled, storeCount];

        try {
            const result = await cockroach.query(query, values);
            if (!result.rows.length) {
                return null;
            }
            return result.rows[0];
        } catch (error) {
            console.log('Error in createEvent:', error);
            throw new UnknownError({ message: error });
        }
    }

    async function deleteEvent({ id, name, userId, isDisabled }) {
        const query = `
            UPDATE ${EVENT_TABLE}
            SET is_disabled = $1
            WHERE id = $2 AND name = $3 AND user_id = $4
            RETURNING id, name, user_id, is_disabled;
        `;
        const values = [isDisabled, id, name, userId];

        try {
            const result = await cockroach.query(query, values);
            if (!result.rows.length) {
                return null; // No Event found with the given criteria
            }
            return result.rows[0]; // Return the updated Event
        } catch (error) {
            console.log('Error in deleteEvent:', error);
            throw new UnknownError({ message: error });
        }
    }

    async function updateEvent({ id, name, userId, description, visibility, location, modifiedAt }) {
        const query = `
            UPDATE ${EVENT_TABLE}
            SET 
                name = $1,
                description = $2,
                visibility = $3,
                location = $4,
                modified_at = $5
            WHERE id = $6 AND user_id = $7
            RETURNING id, name, user_id, description, visibility, location, modified_at, store_count, store_ids;
        `;
        const values = [name, description, visibility, location, modifiedAt, id, userId];

        try {
            const result = await cockroach.query(query, values);
            if (!result.rows.length) {
                return null; // No Event found with the given criteria
            }
            return result.rows[0]; // Return the updated Event
        } catch (error) {
            console.log('Error in updateEvent:', error);
            throw new UnknownError({ message: error });
        }
    }

    async function getAllEvents() {
        const query = `
            SELECT id, name, user_id, description, location, modified_at, store_count, store_ids
            FROM ${EVENT_TABLE}
            WHERE is_disabled = false AND visibility = 'public';
        `;

        try {
            const result = await cockroach.query(query);
            return result.rows; // Return all matching Events
        } catch (error) {
            console.log('Error in getAllEvents:', error);
            throw new UnknownError({ message: error });
        }
    }

    async function getUserEvents({ userId }) {
        const query = `
            SELECT id, name, user_id, description, visibility, location, modified_at, store_count, store_ids
            FROM ${EVENT_TABLE}
            WHERE user_id = $1 AND is_disabled = false;
        `;
        const values = [userId];

        try {
            const result = await cockroach.query(query, values);
            return result.rows; // Return all matching Events for the user
        } catch (error) {
            console.log('Error in getUserEvents:', error);
            throw new UnknownError({ message: error });
        }
    }

    async function deleteEventStores({ storeIds, userId }) {
        const query = `
            UPDATE ${EVENT_TABLE}
            SET 
                store_ids = array(SELECT UNNEST(store_ids) EXCEPT SELECT UNNEST($1::UUID[])),
                store_count = array_length(array(SELECT UNNEST(store_ids) EXCEPT SELECT UNNEST($1::UUID[])), 1)
            WHERE user_id = $2
            RETURNING id, name, user_id, is_disabled, store_ids, store_count;
        `;
        const values = [storeIds, userId];
    
        try {
            const result = await cockroach.query(query, values);
            if (!result.rows.length) {
                return []; // No stores found with the given criteria
            }
            return result.rows; // Return the updated stores
        } catch (error) {
            console.log('Error in deleteStores:', error);
            throw new UnknownError({ message: error });
        }
    }    
}

module.exports = makeEventsDb;
