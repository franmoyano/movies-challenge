"use server"

import { axiosInstance } from "@/src/axios/axios-instance"
import { Genre } from "@/src/model/genre"
import { DiscoverMovieRequest, SearchMovieResponse } from "@/src/model/search"

export const getUpcomingMovies = async (): Promise<SearchMovieResponse> => {
  return await axiosInstance
    .get('/movie/upcoming')
    .then(({ data }) => data)
}

export const discoverMovies = async (params: DiscoverMovieRequest): Promise<SearchMovieResponse> => {
  return await axiosInstance
    .get(`/discover/movie`, { params })
    .then(({ data }) => data)
}

export const getGenres = async (): Promise<{ genres: Genre[] }> => {
  return await axiosInstance
    .get('/genre/movie/list')
    .then(({ data }) => data)
}