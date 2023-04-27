import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = import.meta.env.VITE_REACT_API_KEY

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://myanimelist.p.rapidapi.com',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', API_KEY );
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getAllAnime: builder.query({ query: () => '/anime/top/all' }),
      getUpcomingAnime: builder.query({ query: () => '/anime/top/upcoming' }),
      getAiringAnime: builder.query({ query: () => '/anime/top/airing' }),
      getFavAnime: builder.query({ query: () => '/anime/top/favorite' }),
      getPopularAnime: builder.query({ query: () => '/anime/top/bypopularity' }),
      getAnimeMovie: builder.query({ query: () => '/anime/top/movie' }),
      getSearchAnime: builder.query({ query: (searchTerm) => `/anime/search/${searchTerm}/10` }),

      getAllManga: builder.query({ query: () => '/manga/top/all' }),
      getPopManga: builder.query({ query: () => '/manga/top/bypopularity' }),
      getFavManga: builder.query({ query: () => '/manga/top/favorite' }),
      getLightNovel: builder.query({ query: () => '/manga/top/lightnovels' }),
    }),

});

export const { useGetAllAnimeQuery, useGetUpcomingAnimeQuery, useGetAiringAnimeQuery, useGetFavAnimeQuery, useGetPopularAnimeQuery, useGetAnimeMovieQuery, useGetSearchAnimeQuery, useGetAllMangaQuery,useGetPopMangaQuery, useGetFavMangaQuery, useGetLightNovelQuery } = animeApi;