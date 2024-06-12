"use server"

import { axiosInstance } from "@/src/axios/axios-instance"
import { MovieDetail } from "@/src/model/movie-detail"

export const getMovieDetail = async (id: string): Promise<MovieDetail> => {

  return await axiosInstance
    .get(`/movie/${id}?language=es-AR`)
    .then(({ data }) => data)
    
}