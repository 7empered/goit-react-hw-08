import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = token;
};
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", userData);
      console.log(" userData", userData);
      setAuthHeader(`Bearer ${res.data.token}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", userData);
      setAuthHeader(`Bearer ${res.data.token}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("/auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    setAuthHeader("");
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "/users/refresh", 
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;


    if (!token) {
      
      return thunkAPI.rejectWithValue("No token found");
    }

    try {
      setAuthHeader(`Bearer ${token}`); 
      const res = await axios.get("/users/current");
      return res.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
