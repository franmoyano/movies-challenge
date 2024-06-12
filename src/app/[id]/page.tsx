import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { getMovieDetail, getRecommendations } from './actions/actions'
import Image from 'next/image'
import dayjs from 'dayjs'
import { styles } from './styles'

interface Props {
  params: { id: string }
}

export default async function DetailPage({ params }: Props) {
  const movie = await getMovieDetail(params.id)
  const recommendedMovies = await getRecommendations(params.id)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Container sx={styles.container}>
        <Grid>
          <Image
            alt={`${movie.title}-poster-img`}
            src={`${process.env.IMAGE_BASE_URL}${movie.poster_path}`}
            width={260}
            height={400}
            style={styles.image}
            priority
          >
          </Image>
        </Grid>
        <Grid sx={styles.textContainer}>
          <Typography variant='h4' fontWeight={700}>{movie.title} ({dayjs(movie.release_date).get('year')})</Typography>
          <Typography sx={{ fontStyle: 'italic' }}>{movie.tagline}</Typography>

          <Stack direction="row" gap={2}>
            {movie.genres.map(genre =>
              <Typography variant='overline' fontWeight={500} key={genre.id}>{genre.name}</Typography>
            )}
          </Stack>

          <Box sx={styles.valorationContainer}>
            <Typography>Puntuación promedio:</Typography>
            <Box sx={styles.valoration(movie.vote_average)}>
              <Typography
                variant='h6'

                fontWeight={700}
              >
                {movie.vote_average.toFixed(2)}
              </Typography>

            </Box>
          </Box>

          <Box sx={{ marginTop: '1rem' }}>
            <article>
              <Typography variant='h5'>Sinopsis</Typography>
              <p>{movie.overview}</p>
            </article>
          </Box>
        </Grid>
      </Container>
      <Container sx={styles.container}>
        {/**
         * //TODO: Completar con listado de pelis relacionadas
         */}
      </Container>
    </Box>
  )
}