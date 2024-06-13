import { MoviesGrid } from "./ui/MoviesGrid/MoviesGrid";
import { getUpcomingMovies, getGenres, discoverMovies } from "./actions/actions";
import { CustomCarousel } from "./ui/Carousel";
import { MovieCard } from "./ui/MovieCard/MovieCard";
import { Filter } from "./ui/Filter/Filter";
import { Box, Divider } from "@mui/material";
import { DiscoverMovieRequest } from "../model/search";
import { Paginator } from "./ui/Paginator/Paginator";
import { styles } from "./styles";

interface Props {
  searchParams: DiscoverMovieRequest
}

export default async function Home({ searchParams }: Props) {
  const filtered = await discoverMovies(searchParams)
  const upcoming = await getUpcomingMovies()
  const { genres } = await getGenres()

  return (
    <Box sx={styles.container}>
      <Box sx={styles.filterContainer}>
        <Filter genres={genres} />
      </Box>
      <Box sx={styles.moviesContainer}>
        <MoviesGrid movies={filtered} />
        <Paginator
          totalPages={filtered.total_pages}
          page={filtered.page}
        />
        <Divider />
        <Box padding={2}>
          <h2>Próximos estrenos</h2>
          <CustomCarousel>
            {upcoming.results.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </CustomCarousel>
        </Box>
      </Box>
    </Box>
  )
}