import React from 'react'
import PokeSearch from './components/PokeSearch/PokeSearch'
import './styles/main.scss'

const App = () => {
  return (
    <div className='container'>
      <h1 className='title'>POKEMON</h1>
      <PokeSearch />
    </div>
  )
}

export default App
