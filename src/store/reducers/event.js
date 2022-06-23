let id = 1;

const intialState = [{ id: 1, title: "Etkinlik 1" }];

function event(state, action) {
  switch (action.type) {
    case "ADD_EVENT":
      return {
        id: id,
        title: action.payload.title,
      };

    default:
      return state;
  }
}

function eventReducer(state = intialState, action) {
  switch (action.type) {
    case "ADD_EVENT":
      id = id + 1;
      return [...state, event(undefined, action)];

    default:
      return state;
  }
}

export default eventReducer;
