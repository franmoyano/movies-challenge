"use client"

import { Genre } from "@/src/model/genre"
import { Grid, Select, TextField } from "@mui/material"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { useDebouncedCallback } from "use-debounce"

interface Props {
  genres: Genre[]
}

export const SearchBar = ({ genres }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('query'))

  const handleChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    params.delete('page')
    if (value) {
      params.set('query', value)
    } else {
      params.delete('query')
    }

    router.push(pathname + '?' + params.toString())
  }, 500)

  return (
    <Grid container>
      <Grid sm={10}>
        <TextField
          value={query}
          sx={{ width: '100%' }}
          onChange={({ target }) => {
            setQuery(target.value)
            handleChange(target.value)
          }}
          autoComplete="off"
          placeholder="Ej: Top Gun"
        />
      </Grid>
      <Grid sm={2}>
        <Select fullWidth>
          {genres.map(genre =>
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          )}
        </Select>
      </Grid>
    </Grid>
  )
}