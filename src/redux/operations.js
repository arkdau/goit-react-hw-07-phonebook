import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteData, getData, postData } from "components/services/mockapi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (_, thunkAPI) => {
    try {
      // const resp = await fetchData("GET", "");
      const resp = await getData("contacts/")
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
      // const resp = await fetchData("DELETE", id);
      const resp = await deleteData("contacts/", id)
      return resp;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const fetchAddContacts = createAsyncThunk(
  "contacts/fetch/add",
  async (data, thunkAPI) => {
    try {
      // const resp = await fetchData("POST", "", data);
      const resp = await  postData("contacts/", data)
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
