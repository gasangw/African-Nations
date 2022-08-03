import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = '/v3.1/region/africa';

export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const getCountry = createAsyncThunk('country/getCountry', async (name) => {
  const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  const data = await response.data;
  return data;
});

export const searchCountry = createAsyncThunk('country/searchCountry', async (name) => {
  const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  const data = await response.data;
  return data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    pending: true,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getCountries.pending]: (state) => {
      const newState = state;
      newState.pending = true;
      newState.error = false;
    },
    [getCountries.fulfilled]: (state, action) => {
      const newState = state;
      newState.pending = false;
      newState.countries = action.payload;
      newState.error = false;
    },
    [getCountries.rejected]: (state) => {
      const newState = state;
      newState.pending = false;
      newState.error = true;
    },
    [getCountry.pending]: (state) => {
      const newState = state;
      newState.pending = true;
      newState.error = false;
    },
    [getCountry.fulfilled]: (state, action) => {
      const newState = state;
      newState.pending = false;
      newState.countries = action.payload;
      newState.error = false;
    },
    [getCountry.rejected]: (state) => {
      const newState = state;
      newState.pending = false;
      newState.error = true;
    },
    [searchCountry.pending]: (state) => {
      const newState = state;
      newState.pending = true;
      newState.error = false;
    },
    [searchCountry.fulfilled]: (state, action) => {
      const newState = state;
      newState.pending = false;
      newState.countries = action.payload;
      newState.error = false;
    },
    [searchCountry.rejected]: (state) => {
      const newState = state;
      newState.pending = false;
      newState.error = true;
    },
  },
});

export default countriesSlice.reducer;
