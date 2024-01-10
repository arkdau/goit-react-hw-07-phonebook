import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, setStatusFilter } from "./operations";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    filtr: "",
    error: null,
    isLoading: false,
    contacts: [],
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log("action.payload: ", action.payload);
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(setStatusFilter.type, (state, action) => {
  return {
    ...state,
    filtr: action.payload,
  };
});

  },
});

export const contactReducer = contactSlice.reducer;
export const {
  fetchContactsFulfilled,
  fetchContactsPending,
  fetchContactsRejected,
} = contactSlice.actions;
