import { SearchMovieResponse } from "@/src/model/search"
import { List, ListItem, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

interface Props {
  movies: SearchMovieResponse
}

export const MoviesGrid = ({ movies }: Props) => {
  return (
    <List sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
      {movies.results.map(movie =>
        <ListItem
          key={movie.id}
          sx={{
            backgroundColor: '#FEFEFE',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            borderRadius: '6px',
            width: '200px'
          }}
        >
          <Link
            key={movie.id}
            href={`/${movie.id}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
              color: 'white'
            }}
          >
            <Image
              style={{ borderRadius: '8px' }}
              alt={`${movie.title}-poster`}
              src={`${process.env.IMAGE_BASE_URL}${movie.poster_path}`}
              width={200}
              height={270}
            />
            <Typography color="#000" variant="h6">{movie.title}</Typography>
          </Link>
        </ListItem>
      )}
    </List>
  )
}