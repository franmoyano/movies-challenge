import { MoviesGrid } from "./ui/MoviesGrid";
import { getPopularMovies } from "./actions/actions";

export default async function Home() {
  const movies = await getPopularMovies()

  return (
    <>
      <h2>Populares ahora</h2>
      <MoviesGrid movies={movies} />
    </>
  )
}