import { Genre } from "./genre"

export interface MovieDetail {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
  }
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: []
  production_countries: []
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: { english_name: string, iso_639_1: string, name: string }[]
  status: string
  tagline: string
  title: string
  video: false,
  vote_average: number
  vote_count: number
}