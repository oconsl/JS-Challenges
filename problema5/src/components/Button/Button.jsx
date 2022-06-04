import React from 'react'
import { useSelector } from 'react-redux'
import getClasses from '../../utils/getClasses'
import { toast } from 'react-hot-toast'
import styles from '../../styles/modules/button.module.scss'

const Button = () => {
  const allValid = useSelector((state) => state.conditions.allValid)

  const handleClick = () => {
    toast.success('Congratulations your password is super secure!', {
      icon: '🔒',
      duration: 5000,
      id: 'success'
    })
  }

  return (
    <div className={styles.container}>
      <button
        disabled={!allValid}
        className={getClasses([
          styles.button,
          allValid ? styles['button--active'] : styles['button--disabled']
        ])}
        onClick={handleClick}
      >
        SUBMIT
      </button>
    </div>
  )
}

export default Button
