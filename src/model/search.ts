export interface SearchMovieRequest {
  query?: string
  include_adult?: boolean
  language?: string
  primary_release_year?: string
  page?: number
  region?: string
  year?: string
}

export interface DiscoverMovieRequest {
  with_genres?: string
  language?: string
  page?: number
  sort_by?: string
}

export interface MovieItemResponse {
  adult: boolean
  backdrop_path: null,
  genre_ids: number[],
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface SearchMovieResponse {
  page: number
  results: MovieItemResponse[]
  total_pages: number
  total_results: number
}