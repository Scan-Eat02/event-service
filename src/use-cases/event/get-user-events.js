module.exports = function makeGetUserEvents({ eventsDb }) {
    return async function getUserEvents({
        userId,
    }) {
      try {
        // Update the Event with additional fields
        const userEvents = await eventsDb.getUserEvents(userId);
  
        return userEvents;
      } catch (error) {
        console.log("Error during Event get by user:", error);
        throw error;
      }
    };
  };
