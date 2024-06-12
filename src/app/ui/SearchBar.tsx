"use client"

import { TextField } from "@mui/material"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { useDebouncedCallback } from "use-debounce"

export const SearchBar = () => {
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
    <TextField
      value={query}
      sx={{ width: '100%' }}
      onChange={({ target }) => {
        setQuery(target.value)
        handleChange(target.value)
      }}
      autoComplete="off"
    />
  )
}