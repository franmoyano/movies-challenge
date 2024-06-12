"use server"

import { axiosInstance } from "@/src/axios/axios-instance"
import { SearchMovieResponse } from "@/src/model/search"

export const getPopularMovies = async (): Promise<SearchMovieResponse> => {

  return await axiosInstance
    .get(`/movie/popular`, { params: { language: 'es-AR' } })
    .then(({ data }) => data)

}