import { configureStore } from "@reduxjs/toolkit";
import newEventReducer from "./EventSlice";

const store =  configureStore({
  reducer: {
    newEventReducer,
  },
});

export default store