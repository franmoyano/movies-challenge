"use server"

import { axiosInstance } from "@/src/axios/axios-instance"
import { MovieDetail } from "@/src/model/movie-detail"
import { SearchMovieResponse } from "@/src/model/search"

export const getMovieDetail = async (id: string): Promise<MovieDetail> => {
  return await axiosInstance
    .get(`/movie/${id}`)
    .then(({ data }) => data)
}

export const getSimilars = async (id: string): Promise<SearchMovieResponse> => {
  return await axiosInstance
    .get(`/movie/${id}/similar`)
    .then(({ data }) => data)
}