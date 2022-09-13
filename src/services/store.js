import { configureStore } from '@reduxjs/toolkit';
import { exerciseApi } from './exerciseApi';
import { youtubeApi } from './youtubeApi';
import reduxSlice from './reduxSlice';

const store = configureStore({
  reducer: {
    [exerciseApi.reducerPath]: exerciseApi.reducer,
    [youtubeApi.reducerPath]: youtubeApi.reducer,
    redux: reduxSlice.reducer,
  },
});

export default store;
