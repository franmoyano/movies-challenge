"use server"

import { axiosInstance } from "@/src/axios/axios-instance"
import { Genre } from "@/src/model/genre"
import { SearchMovieRequest, SearchMovieResponse } from "@/src/model/search"

export const searchMovies = async ({ language = 'es-AR', ...rest }: SearchMovieRequest): Promise<SearchMovieResponse> => {

  return await axiosInstance
    .get(`/search/movie`, { params: { language, ...rest } })
    .then(({ data }) => data)

}

export const getGenres = async (): Promise<{ genres: Genre[] }> => {
  return await axiosInstance
    .get('/genre/movie/list', { params: { language: 'es' } })
    .then(({ data }) => data)
}