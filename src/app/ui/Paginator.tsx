"use client"

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Props {
  totalPages?: number
  page?: number
}

export const Paginator = ({ totalPages, page = 1 }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const handleChange = (_: any, value: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', value.toString())
    router.push(pathname + '?' + params)
  }

  return (
    <Stack spacing={2}>
      {totalPages && totalPages > 0 &&
        <Pagination
          onChange={handleChange}
          count={totalPages}
          shape="rounded"
          page={page}
        />
      }
    </Stack>
  )
}