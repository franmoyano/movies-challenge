export interface SearchMovieRequest {
  query: string
  include_adult?: boolean
  language?: string
  primary_release_year?: string
  page?: number
  region?: string
  year?: string
}

export interface SearchMovieResponse {
  page: number
  results: {
    adult: boolean
    backdrop_path: null,
    genre_ids: [],
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
  }[]
  total_pages: number
  total_results: number
}