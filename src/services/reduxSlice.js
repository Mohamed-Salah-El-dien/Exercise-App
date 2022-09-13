import { createSlice } from '@reduxjs/toolkit';

const reduxSlice = createSlice({
  name: 'redux',
  initialState: {
    exercises: [],
    bodyPart: 'all',
  },
  reducers: {
    setExercises(state, action) {
      state.exercises = action.payload;
    },
    setBodyPart(state, action) {
      state.bodyPart = action.payload;
    },
  },
});

export const reduxActions = reduxSlice.actions;

export default reduxSlice;
