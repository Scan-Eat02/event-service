module.exports = function makeCreateEvent({ eventsDb }) {
    return async function createEvent({
      name,
      description,
      userId,
      visibility,
      location,
      isDisabled,
      storeCount,
    }) {
      try {  
        // Create the new Event with additional fields
        const newEvent = await eventsDb.createEvent({
          name,
          description,
          userId,
          visibility,
          location,
          isDisabled,
          storeCount
        });
  
        return newEvent;
      } catch (error) {
        console.log("Error during Event creation:", error);
        throw error;
      }
    };
  };
  