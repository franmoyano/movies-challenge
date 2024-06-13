import { Box, Container, Typography } from '@mui/material'
import { getMovieDetail, getRecommendations } from './actions/actions'
import { styles } from './styles'
import { CustomCarousel } from '../ui/Carousel'
import { MovieCard } from '../ui/MovieCard/MovieCard'
import { MovieDetailComponent } from '../ui/MovieDetail/MovieDetail'

interface Props {
  params: { id: string }
}

export default async function DetailPage({ params }: Props) {
  const movie = await getMovieDetail(params.id)
  const recommendedMovies = await getRecommendations(params.id)

  return (
    <Box sx={styles.mainBox}>
      <MovieDetailComponent movie={movie} />
      <Container sx={styles.container('column')}>
      <Typography variant='h5' fontWeight={700}>Recomendaciones similares</Typography>
        <CustomCarousel>
          {recommendedMovies.results.map(movie =>
            <MovieCard key={movie.id} movie={movie} />)
          }
        </CustomCarousel>
      </Container>
    </Box >
  )
}