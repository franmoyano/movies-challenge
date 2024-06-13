"use client"

import { Genre } from "@/src/model/genre"
import { Box, Chip, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { styles } from "./Filter.styles"
import { SORT_NAME, SORT_OPTIONS, WITH_GENRES_NAME } from "../../constants/filter-constants"
import useFilter from "@/src/hooks/useFilter"

interface Props {
  genres: Genre[]
}

export const Filter = ({ genres }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [params, setParams] = useState(new URLSearchParams(searchParams.toString()))
  const { getGenresParams, getSortParams } = useFilter()

  const handleChange = useDebouncedCallback(() => {
    params.delete('page')
    router.push(pathname + '?' + params.toString())
  }, 400)

  const genreHandler = (id: number) => {
    setParams(getGenresParams(id, params))
  }

  const sortHandler = (value: string) => {
    setParams(getSortParams(value, params))
  }
  
  useEffect(() => handleChange(), [handleChange, params])

  return (
    <Box sx={styles.container}>
      <Typography variant="h6" fontWeight={700}>Filtros</Typography>
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