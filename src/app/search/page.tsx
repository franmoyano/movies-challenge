/* eslint-disable react/jsx-key */
import { SearchMovieRequest } from "../../model/search";
import styles from "./page.module.css";
import { SearchBar } from "../ui/SearchBar";
import { List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { searchMovies } from "./actions/actions";
import { Paginator } from "../ui/Paginator";

interface Props {
  searchParams: SearchMovieRequest
}

export default async function SearchPage({ searchParams }: Props) {
  const movies = await searchMovies(searchParams)
  console.log(movies)

  return (
    <main className={styles.main}>
      <h1>Búsqueda de películas</h1>
      <SearchBar />
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
                alt={`${movie.title} poster`}
                src={`${process.env.IMAGE_BASE_URL}${movie.poster_path}`}
                width={200}
                height={270}
              />
              <Typography color="#000" variant="h6">{movie.title}</Typography>
            </Link>
          </ListItem>
        )}
      </List>
      <Paginator
        totalPages={movies.total_pages}
        page={movies.page}
      />
    </main>
  );
}
