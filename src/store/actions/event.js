export function addEvent(event) {
  return {
    type: "ADD_EVENT",
    payload: event,
  };
}

export function deleteEvent(id) {
  return {
    type: "DELETE_EVENT",
    payload: id,
  };
}

export function updatedEvent(event) {
  return {
    type: "UPDATE_EVENT",
    payload: event,
  };
}



