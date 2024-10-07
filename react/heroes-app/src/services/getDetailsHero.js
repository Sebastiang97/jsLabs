import { api_key, base_url } from './config'

const getDetailsHero = ({ id = 0 }) => {
  const apiUrl = `${base_url}/characters/${id}?apikey=${api_key}`

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
      return heroes[0]
    })
}

export default getDetailsHero
