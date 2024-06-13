interface SortOptionsProps {
  id: string
  label: string
}

export const SORT_OPTIONS: SortOptionsProps[] = [
  {
    id: 'popularity.desc',
    label: 'Popularidad (más popular primero)'
  },
  {
    id: 'popularity.asc',
    label: 'Popularidad (menos popular primero)'
  },
  {
    id: 'primary_release_date.asc',
    label: 'Más antiguas primero'
  },
  {
    id: 'primary_release_date.desc',
    label: 'Más recientes primero'
  }
]

export const WITH_GENRES_NAME = 'with_genres'
export const SORT_NAME = 'sort_by'