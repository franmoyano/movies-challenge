"use server"

import { axiosInstance } from "@/src/axios/axios-instance"
import { SearchMovieRequest, SearchMovieResponse } from "@/src/model/search"

export const searchMovies = async ({ language = 'es-AR', ...rest }: SearchMovieRequest): Promise<SearchMovieResponse> => {

  return await axiosInstance
    .get(`/search/movie`, { params: { language, ...rest } })
    .then(({ data }) => data)
    
}