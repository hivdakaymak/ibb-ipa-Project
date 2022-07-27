import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./EventSlice";

export default configureStore({
  reducer: {
    newEventReducer: eventReducer,
  },
});
