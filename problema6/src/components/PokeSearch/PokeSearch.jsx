import React, { useState } from 'react'
import PokeCard from '../PokeCard/PokeCard'
import Search from '../Search/Search'
import styles from '../../styles/modules/pokeSearch.module.scss'

const PokeSearch = () => {
  const [pokemonData, setPokemonData] = useState({
    name: '',
    id: '',
    types: [],
    weight: '',
    height: '',
    sprites: {
      front_default: '',
      other: {
        dream_world: {
          front_default: ''
        }
      }
    }
  })

  return (
    <div className={styles.container}>
      <Search setPokemonData={setPokemonData} />
      {pokemonData.name !== '' ? (
        <PokeCard pokemonData={pokemonData} />
      ) : (
        <div className={styles.message__container}>
          <p>Search a pokemon to show data.</p>
        </div>
      )}
    </div>
  )
}

export default PokeSearch
