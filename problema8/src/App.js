import React, { useState } from 'react'
import Input from './components/Input/Input'
import ImageContainer from './components/ImageContainer/ImageContainer'
import './styles/main.scss'

function App() {
  const [images, setImages] = useState([])

  return (
    <div className='container'>
      <Input setImages={setImages} />
      <hr />
      <ImageContainer images={images} />
    </div>
  )
}

export default App
