import { configureStore } from '@reduxjs/toolkit';
import { animeApi } from './animeApi';


export const store = configureStore({
  reducer: {
    [animeApi.reducerPath]: animeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(animeApi.middleware),
});