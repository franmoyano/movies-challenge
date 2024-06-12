import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: process.env.TMDB_API_KEY
  },
  params: {
    language: 'es-AR'
  }
})