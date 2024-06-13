import { MovieItemResponse } from "@/src/model/search"
import { Grid, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { AverageVoteIcon } from "../AverageVoteIcon/AverageVoteIcon"
import { styles } from "./MovieCard.styles"

interface Props {
  movie: MovieItemResponse
}

export const MovieCard = ({ movie }: Props) => {

  return (
    <Grid
      item
      xs
      key={movie.id}
      sx={styles.listItem}
    >
      <Link
        key={movie.id}
        href={`/${movie.id}`}
        scroll={false}
        style={{ ...styles.link, flexDirection: 'column' }}
      >
        <AverageVoteIcon vote={movie.vote_average} sx={styles.voteIcon} />
        <Image
          style={styles.image}
          alt={`${movie.title}-poster`}
          src={`${process.env.IMAGE_BASE_URL}${movie.poster_path}`}
          width={210}
          height={295}
          quality={25}
          priority
        />
        <Typography color="#000" variant="body1" fontSize={16} px={1} fontWeight={700}>{movie.title}</Typography>
      </Link>
    </Grid >
  )
}