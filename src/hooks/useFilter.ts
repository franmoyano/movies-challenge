import { SORT_NAME, WITH_GENRES_NAME } from "../app/constants/filter-constants"

const useFilter = () => {

  const getSortParams = (value: string, params: URLSearchParams) => {
    const auxParams = new URLSearchParams(params)

    if (value) {
      auxParams.set(SORT_NAME, value)
    } else {
      auxParams.delete(SORT_NAME)
    }

    return auxParams
  }

  const getGenresParams = (id: number, params: URLSearchParams) => {
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

    return auxParams
  }


  return {
    getSortParams,
    getGenresParams
  }
}

export default useFilter