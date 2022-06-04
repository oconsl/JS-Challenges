import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleValidation } from '../../features/conditions'
import {
  validationA,
  validationB,
  validationC,
  validationD,
  validationE,
  validationF,
  validationG,
  validationH
} from '../../utils/validators'
import styles from '../../styles/modules/input.module.scss'

const Input = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const validations = {
      validationA: validationA(event.target.value),
      validationB: validationB(event.target.value),
      validationC: validationC(event.target.value),
      validationD: validationD(event.target.value),
      validationE: validationE(event.target.value),
      validationF: validationF(event.target.value),
      validationG: validationG(event.target.value),
      validationH: validationH(event.target.value)
    }

    dispatch(toggleValidation(validations))
  }

  return (
    <div className={styles.container}>
      <label className={styles.input__label} forhtml='password'>
        Password
      </label>
      <input
        className={styles.input}
        type='password'
        id='password'
        onChange={handleChange}
      />
    </div>
  )
}

export default Input
