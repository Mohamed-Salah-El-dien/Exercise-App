import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const youtubeApiHeaders = {
  'X-RapidAPI-Key': 'c46ff3ae35msh2d8ea35e9dc14b8p1bee04jsnf980dfc18795',
  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
};
const createRequest = (url) => ({ url, headers: youtubeApiHeaders });

export const youtubeApi = createApi({
  reducerPath: 'youtubeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://youtube-search-and-download.p.rapidapi.com',
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: (name) => createRequest(`/search?query=${name} exercise`),
    }),
  }),
});

export const { useLazyGetVideosQuery } = youtubeApi;
