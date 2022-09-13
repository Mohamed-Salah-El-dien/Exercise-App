import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const exerciseApiHeaders = {
  'X-RapidAPI-Key': 'c46ff3ae35msh2d8ea35e9dc14b8p1bee04jsnf980dfc18795',
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
};
const createRequest = (url) => ({ url, headers: exerciseApiHeaders });

export const exerciseApi = createApi({
  reducerPath: 'exerciseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://exercisedb.p.rapidapi.com',
  }),
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => createRequest('/exercises'),
    }),

    getExerciseDetail: builder.query({
      query: (id) => createRequest(`/exercises/exercise/${id}`),
    }),

    getTargetMuscle: builder.query({
      query: (target) => createRequest(`/exercises/target/${target}`),
    }),

    getBodyPart: builder.query({
      query: (bodyPart) => createRequest(`/exercises/bodyPart/${bodyPart}`),
    }),

    getBodyPartList: builder.query({
      query: () => createRequest('/exercises/bodyPartList'),
    }),

    getEquipment: builder.query({
      query: (equipment) => createRequest(`/exercises/equipment/${equipment}`),
    }),
  }),
});

export const {
  useLazyGetAllQuery,
  useLazyGetExerciseDetailQuery,
  useLazyGetTargetMuscleQuery,
  useLazyGetBodyPartQuery,
  useLazyGetBodyPartListQuery,
  useLazyGetEquipmentQuery,
} = exerciseApi;
