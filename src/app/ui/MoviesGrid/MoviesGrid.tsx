import { SearchMovieResponse } from "@/src/model/search"
import { Box, Grid, Typography } from "@mui/material"
import { MovieCard } from "../MovieCard/MovieCard"
import { styles } from "./MoviesGrid.styles"

interface Props {
  movies: SearchMovieResponse
}

export const MoviesGrid = ({ movies }: Props) => {
  return (
    movies.results.length > 0
      ? <Grid container spacing={2} padding={2} gap={2} >
        {movies.results.map(movie =>
          <MovieCard key={movie.id} movie={movie} />
        )}
      </Grid>
      :
      <Box sx={styles.noContentMessage}>
        <Typography variant="h4">Oops! Parece que no hay resultados</Typography>
      </Box>
  )
}