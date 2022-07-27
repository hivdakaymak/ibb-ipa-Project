import { createSlice } from "@reduxjs/toolkit";
import { Action } from "history";

const formSlices = createSlice({
  name: "forms",
  initialState: [],
  reducers: {
    addEvent: (state, action) => {
      const addNewEvent = {
        id: id,
        title: Action.payload.name,
      };
    },

    deleteEvent: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },

    updateEvent: (state, action) => {
      if (state.id !== action.payload.id) {
        return state;
      }
      return Object.assign({}, state, { title: action.payload.title });
    },

    addEventHome: (state, action) => {
      const addNewEventHome = {
        id: id,
        name: action.payload.name,
        desc: action.payload.desc,
        place: action.payload.place,
        kont: action.payload.kont,
        date: action.payload.date,
      };
    },

    deleteuser: (state, action) => {
      return state.filter((event) => event.id !== action.payload.id);
    },

    
  },
});

export const { addEvent, deleteEvent } = formSlices.action;
export default formSlices.reducers;
