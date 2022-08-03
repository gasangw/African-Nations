import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './countries/countries';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
