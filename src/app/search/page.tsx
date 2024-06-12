import { SearchMovieRequest } from "../../model/search";
import { SearchBar } from "../ui/SearchBar";
import { getGenres, searchMovies } from "./actions/actions";
import { Paginator } from "../ui/Paginator";
import { MoviesGrid } from "../ui/MoviesGrid";
import { Box } from "@mui/material";

interface Props {
  searchParams: SearchMovieRequest
}

export default async function SearchPage({ searchParams }: Props) {
  const movies = await searchMovies(searchParams)
  const { genres } = await getGenres() //TODO: esto podría guardarse en contexto

  return (
    <Box>
      <h2>Buscá películas por su título</h2>
      <SearchBar genres={genres} />
      <MoviesGrid movies={movies} />
      <Paginator
        totalPages={movies.total_pages}
        page={movies.page}
      />
    </Box>
  );
}
