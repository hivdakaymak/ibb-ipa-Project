import { EKLE } from "../actions/action";

const INITIAL_STATE = {
  events: [{ name: "Etkinlik Adı 1" }, { name: "Etkinlik Adı 2" }],
  loginUser: {}
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EKLE:
      return {
        ...state,
        events: [
          ...state.events,
          {
            name: action.payload,
          },
        ],
      };
    case GET_DATA:
      return { ...state };

    default:
      return state;
  }
};
