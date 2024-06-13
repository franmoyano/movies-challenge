import { Chip, Container, Grid, Typography, Stack, Box } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { WITH_GENRES_NAME } from "../../constants/filter-constants"
import { AverageVoteIcon } from "../AverageVoteIcon/AverageVoteIcon"
import { styles } from "./MovieDetail.styles"
import { MovieDetail } from "@/src/model/movie-detail"
import dayjs from "dayjs"

interface Props {
  movie: MovieDetail
}

export const MovieDetailComponent = ({ movie }: Props) => {
  return (
    <Container sx={styles.container('row')}>
      <Grid>
        <Image
          alt={`${movie.title} poster img`}
          src={`${process.env.IMAGE_BASE_URL}${movie.poster_path}`}
          width={260}
          height={400}
          style={styles.image}
          priority
        />
      </Grid>
      <Grid sx={styles.textContainer}>
        <Typography variant='h4' fontWeight={700}>{movie.title} ({dayjs(movie.release_date).get('year')})</Typography>
        <Typography sx={styles.tagLine}>{movie.tagline}</Typography>
        <Stack direction="row" gap={2} flexWrap="wrap">
          {movie.genres.map(({ id, name }) =>
            <Link
              key={id}
              href={`/?${WITH_GENRES_NAME}=${id}`}
            >
              <Chip
                key={id}
                label={name}
                clickable
                color="warning"
                variant={'outlined'}
              />
            </Link>
          )}
        </Stack>

        <Box sx={styles.valorationContainer}>
          <Typography>Porcentaje valoración</Typography>
          <AverageVoteIcon vote={movie.vote_average} />
        </Box>

        <Box sx={{ marginTop: '1rem', pr: '5rem' }}>
          <Typography variant='h5'>Sinopsis</Typography>
          <p>{movie.overview}</p>
        </Box>

        <Box><Typography variant="body2">Ingresos: US{movie.revenue.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}</Typography></Box>
      </Grid>
    </Container>
  )
}