module.exports = function makeDeleteEvent({ eventsDb }) {
    return async function deleteEvent({
      id,
      name,
      userId,
    }) {
      try {  
        // Create the new Event with additional fields
        const deletedEvent = await eventsDb.deleteEvent({
          id,
          name,
          userId,
          isDisabled: true,
        });
  
        return deletedEvent;
      } catch (error) {
        console.log("Error during Event deletion:", error);
        throw error;
      }
    };
  };
  