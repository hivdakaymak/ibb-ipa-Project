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

export function addEventHome(event) {
  return {
    type: "ADD_EVENT_HOME",
    payload: event,
  };
}

export function addLoginUser(event) {
  return {
    type: "LOGIN_USER",
    payload: event,
  };
}

export function deleteUser(id) {
  return {
    type: "DELETE_USER",
    payload: id,
  };
}

