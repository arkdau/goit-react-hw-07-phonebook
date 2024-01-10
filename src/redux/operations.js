import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "components/services/mockapi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (_, thunkAPI) => {
    try {
      // const resp = await axios.get(URL);
      const resp = await fetchData();
      console.log("fetchContacts: ", resp);
      return resp;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

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
