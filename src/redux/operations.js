import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "components/services/mockapi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (_, thunkAPI) => {
    try {
      // const resp = await axios.get(URL);
      const resp = await fetchData("GET", "");
      console.log("fetchContacts: ", resp);
      return resp;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const fetchDelContacts = createAsyncThunk(
    "contacts/fetch/delete",
    async (id, thunkAPI) => {
      try {
        // const resp = await axios.get(URL);
        const resp = await fetchData("DELETE", id);
        console.log("fetchDelContacts: ", resp);
        return resp;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    },
  );

export const deleteContact = createAction("contact/deleteContact");

export const setStatusFilter = createAction(
  "filters/setStatusFilter",
  (text) => {
    return {
      payload: {
        text,
      },
    };
  },
);
