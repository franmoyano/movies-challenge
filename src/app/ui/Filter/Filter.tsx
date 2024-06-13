"use client"

import { Genre } from "@/src/model/genre"
import { Box, Chip, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { styles } from "./Filter.styles"
import { SORT_NAME, SORT_OPTIONS, WITH_GENRES_NAME } from "../../constants/filter-constants"

interface Props {
  genres: Genre[]
}

export const Filter = ({ genres }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [params, setParams] = useState(new URLSearchParams(searchParams.toString()))

  const handleChange = useDebouncedCallback(() => {
    params.delete('page')
    router.push(pathname + '?' + params.toString())
  }, 500)

  const genreHandler = (id: number) => {
    const auxParams = new URLSearchParams(params)
    const parsedId = id.toString()
    const genresParam = auxParams.get(WITH_GENRES_NAME) || ''
    const genresList = genresParam ? decodeURIComponent(genresParam).split(',').filter(Boolean) : []

    const index = genresList.indexOf(parsedId)

    if (index >= 0) {
      genresList.splice(index, 1)
    } else {
      genresList.push(parsedId)
    }

    const updatedGenres = genresList.join(',')

    if (updatedGenres.length > 0) {
      auxParams.set(WITH_GENRES_NAME, updatedGenres)
    } else {
      auxParams.delete(WITH_GENRES_NAME)
    }

    setParams(auxParams)
  }

  const sortHandler = (value: string) => {
    const auxParams = new URLSearchParams(params)

    if (value) {
      auxParams.set(SORT_NAME, value)
    } else {
      auxParams.delete(SORT_NAME)
    }

    setParams(auxParams)
  }

  useEffect(() => handleChange(), [handleChange, params])

  return (
    <Box sx={styles.container}>
      <Typography variant="h6" fontWeight={700}>Filtros</Typography>
      <Box>
        <Typography variant="subtitle2">Palabra clave</Typography>
        <TextField
          fullWidth
        />
      </Box>
      <Box>
        <Typography variant="subtitle2">Ordenar por</Typography>
        <Select
          color="warning"
          fullWidth
          onChange={(e: SelectChangeEvent) => sortHandler(e.target.value)}
          defaultValue={params.get(SORT_NAME) || 'popularity.desc'}
        >
          {SORT_OPTIONS.map(({ id, label }) =>
            <MenuItem key={id} value={id}>{label}</MenuItem>
          )}
        </Select>
      </Box>
      <Box>
        <Typography variant="subtitle2">Géneros</Typography>
        <Box sx={styles.genres}>
          {genres.map(genre =>
            <Chip
              key={genre.id}
              label={genre.name}
              clickable
              color="warning"
              variant={params.get(WITH_GENRES_NAME)?.includes(genre.id.toString()) ? 'filled' : 'outlined'}
              onClick={() => genreHandler(genre.id)}
              sx={styles.chip}
            />
          )}
        </Box>
      </Box>
    </Box>
  )
}