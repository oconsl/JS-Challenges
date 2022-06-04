import axios from 'axios'
import { TYPES, ORDER, POKEMON } from './utils/constants.js'

// A
const typeA = TYPES[3] || 'electric'
// B
const typeB = TYPES[2] || 'dragon'
const typeC = TYPES[11] || 'ice'
// C
const pokemonName = POKEMON['groudon'] || 'registeel'
// D
const pokemonId = 25
// E
const pokemonIds = [87, 56, 78, 124, 55]
const orderBy = ORDER['name'] || 'name'
// F
const otherPokemonId = 136
const typeD = TYPES[6] || 'fire'

// Función A
const totalByType = async (type) => {
  return axios
    .get(`https://pokeapi.co/api/v2/type/${type}`)
    .then((res) => res.data.pokemon.length)
}

// Función B
const pokemonWithTwoTypes = async (type1, type2) => {
  const pokemonArrayType1 = await axios
    .get(`https://pokeapi.co/api/v2/type/${type1}`)
    .then((res) => res.data.pokemon.map((object) => object.pokemon.name))

  const pokemonArrayType2 = await axios
    .get(`https://pokeapi.co/api/v2/type/${type2}`)
    .then((res) => res.data.pokemon.map((object) => object.pokemon.name))

  return pokemonArrayType1.filter((pokemon) =>
    pokemonArrayType2.includes(pokemon)
  )
}

// Función C
const numberByName = async (name) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => res.data.id)
    .catch((err) => err.response.statusText)
}

// Función D
const statsByNumber = async (number) => {
  const stats = {}
  const rawStats = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then((res) => res.data.stats)

  rawStats.forEach((stat) => {
    stats[stat.stat.name] = stat.base_stat
  })

  return stats
}

// Función E
const pokemonArrayOrderedBy = async (ids, orderBy) => {
  const pokemonArray = await Promise.all(
    ids.map(async (id) => {
      const res = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.data)
      return res
    })
  )

  const pokemonInfoArray = pokemonArray.map((pokemon) => {
    return {
      name: pokemon.name,
      type: pokemon.types[0].type.name,
      weight: pokemon.weight
    }
  })

  return pokemonInfoArray.sort((pokeA, pokeB) => {
    if (orderBy === 'name' || orderBy === 'type') {
      if (pokeA[orderBy] < pokeB[orderBy]) return -1
      else if (pokeA[orderBy] > pokeB[orderBy]) return 1
      else return 0
    } else {
      return pokeB.weight - pokeA.weight
    }
  })
}

// Función F
const pokemonIdTypeMatch = async (number, type) => {
  const typesOfPokemon = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then((res) => res.data.types)

  return (
    typesOfPokemon[0]?.type.name === type ||
    typesOfPokemon[1]?.type.name === type
  )
}

// Run!
const runFunctions = async () => {
  const FUNCTION_NAMES = [
    'totalByType',
    'pokemonWithTwoTypes',
    'pokemonWithTwoTypes',
    'statsByNumber',
    'pokemonArrayOrderedBy',
    'pokemonIdTypeMatch'
  ]

  Promise.all([
    totalByType(typeA),
    pokemonWithTwoTypes(typeB, typeC),
    numberByName(pokemonName),
    statsByNumber(pokemonId),
    pokemonArrayOrderedBy(pokemonIds, orderBy),
    pokemonIdTypeMatch(otherPokemonId, typeD)
  ])
    .then((res) => {
      res.forEach((result, index) =>
        console.log(`${FUNCTION_NAMES[index]}:\n`, result, '\n\n')
      )
    })
    .catch((err) => console.log(err.code))
}

runFunctions()
