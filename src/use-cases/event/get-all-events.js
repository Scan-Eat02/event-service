module.exports = function makeGetAllEvents({ eventsDb }) {
    return async function getAllEvents() {
      try {
        // Update the Event with additional fields
        const allEvents = await eventsDb.getAllEvents();
  
        return allEvents;
      } catch (error) {
        console.log("Error during Event get all:", error);
        throw error;
      }
    };
  };
