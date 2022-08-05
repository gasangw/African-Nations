import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countriesReducer from './countries/countries';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
