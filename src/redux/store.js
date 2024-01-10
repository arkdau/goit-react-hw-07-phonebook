import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice";

// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     filter: filterReducer,
//   },
// });


export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

