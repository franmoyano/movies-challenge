import { Box, Container, Typography } from '@mui/material'
import { getMovieDetail, getSimilars } from './actions/actions'
import { styles } from './styles'
import { CustomCarousel } from '../ui/Carousel'
import { MovieCard } from '../ui/MovieCard/MovieCard'
import { MovieDetailComponent } from '../ui/MovieDetail/MovieDetail'
import { Metadata } from 'next'

interface Props {
  params: { id: string }
}

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const { title } = await getMovieDetail(params.id)
  return ({
    title: `${title} - Movies App`,
    description: "Challenge Movies App",
  })
}

export default async function DetailPage({ params }: Props) {
  const movie = await getMovieDetail(params.id)
  const recommendedMovies = await getSimilars(params.id)

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