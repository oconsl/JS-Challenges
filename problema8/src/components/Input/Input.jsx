import React, { useState } from 'react'
import { getCats } from '../../services'
import styles from '../../styles/modules/input.module.scss'

const Input = ({ setImages }) => {
  const [number, setNumber] = useState(1)

  const handleClick = () => {
    Promise.all([getCats(number)]).then((res) => setImages(res[0]))
  }

  const handleChange = (event) => {
    setNumber(event.target.value)
  }

  return (
    <div className={styles.container}>
      <label htmlFor='number' className={styles.label}>
        Number of images:
      </label>
      <input
        className={styles.input}
        type='number'
        id='number'
        min='1'
        max='15'
        onChange={handleChange}
      />
      <button className={styles.button} onClick={handleClick}>
        CATIFY!
      </button>
    </div>
  )
}

export default Input
