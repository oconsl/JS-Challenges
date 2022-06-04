import axios from 'axios'

export const getPokemonNamesAndIDs = async () => {
  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0'
  )
  const idsArray = response.data.results.map((pokemon) => {
    return pokemon.url.split('/').slice(-2)[0]
  })

  const namesArray = response.data.results.map((pokemon) => {
    return pokemon.name
  })

  return { idsArray, namesArray }
}

export const getPokemonDataByNameOrID = async (search) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${search}`
  )

  return response.data
}
