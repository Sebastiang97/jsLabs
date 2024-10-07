import { api_key, base_url } from './config'

const getAllHeroes = ({ search = '', limit = 25, pages = 0 }) => {
  let apiUrl = ''
  if (search === '') {
    apiUrl = `${base_url}/characters?apikey=${api_key}&limit=${limit}&offset=${
      pages * limit
    }`
  } else {
    apiUrl = `${base_url}/characters?nameStartsWith=${search}&apikey=${api_key}&limit=${limit}&offset=${
      pages * limit
    }`
  }

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
      const { results = [] } = res.data
      const heroes = results.map((heroe) => {
        const { thumbnail, description, resourceURI, name, id } = heroe
        const { path, extension } = thumbnail
        const url = path + '.' + extension
        return { name, id, url, description, resourceURI }
      })
      return heroes
    })
}

export default getAllHeroes
