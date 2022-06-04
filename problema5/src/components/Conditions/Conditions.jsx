import React from 'react'
import { useSelector } from 'react-redux'
import cross from '../../assets/bx-x.svg'
import check from '../../assets/bx-check.svg'
import getClasses from '../../utils/getClasses'
import styles from '../../styles/modules/condition.module.scss'

const Conditions = () => {
  const validations = useSelector((state) => state.conditions)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Password must meet the following conditions:
      </h2>
      <hr />
      <ul>
        <div className={styles.list}>
          <img
            src={validations.validationA ? check : cross}
            alt='icon'
            className={getClasses([
              styles.icon,
              validations.validationA
                ? styles['icon--valid']
                : styles['icon--invalid']
            ])}
          />
          <li
            className={getClasses([
              styles.condition,
              validations.validationA
                ? styles['condition--valid']
                : styles['condition--invalid']
            ])}
          >
            Must contain at least 16 characters.
          </li>
        </div>
        <div className={styles.list}>
          <img
            src={validations.validationB ? check : cross}
            alt='icon'
            className={getClasses([
              styles.icon,
              validations.validationB
                ? styles['icon--valid']
                : styles['icon--invalid']
            ])}
          />
          <li
            className={getClasses([
              styles.condition,
              validations.validationB
                ? styles['condition--valid']
                : styles['condition--invalid']
            ])}
          >
            Must contain a uppercase letter and a lowercase letter.
          </li>
        </div>
        <div className={styles.list}>
          <img
            src={validations.validationC ? check : cross}
            alt='icon'
            className={getClasses([
              styles.icon,
              validations.validationC
                ? styles['icon--valid']
                : styles['icon--invalid']
            ])}
          />
          <li
            className={getClasses([
              styles.condition,
              validations.validationC
                ? styles['condition--valid']
                : styles['condition--invalid']
            ])}
          >
            It cannot contain the same two letters in a row.
          </li>
        </div>
        <div className={styles.list}>
          <img
            src={validations.validationD ? check : cross}
            alt='icon'
            className={getClasses([
              styles.icon,
              validations.validationD
                ? styles['icon--valid']
                : styles['icon--invalid']
            ])}
          />
          <li
            className={getClasses([
              styles.condition,
              validations.validationD
                ? styles['condition--valid']
                : styles['condition--invalid']
            ])}
          >
            Must contain at least 4 numbers.
          </li>
        </div>
        <div className={styles.list}>
          <img
            src={validations.validationE ? check : cross}
            alt='icon'
            className={getClasses([
              styles.icon,
              validations.validationE
                ? styles['icon--valid']
                : styles['icon--invalid']
            ])}
          />
          <li
            className={getClasses([
              styles.condition,
              validations.validationE
                ? styles['condition--valid']
                : styles['condition--invalid']
            ])}
          >
            It cannot contain the same two numbers in a row.
          </li>
        </div>
        <div className={styles.list}>
          <img
            src={validations.validationF ? check : cross}
            alt='icon'
            className={getClasses([
              styles.icon,
              validations.validationF
                ? styles['icon--valid']
                : styles['icon--invalid']
            ])}
          />
          <li
            className={getClasses([
              styles.condition,
              validations.validationF
                ? styles['condition--valid']
                : styles['condition--invalid']
            ])}
          >
            Must contain at least 2 special characters (!@#$%ˆ&*-_+=?), but must
            be all unique and cannot be in a row.
          </li>
        </div>
        <div className={styles.list}>
          <img
            src={validations.validationG ? check : cross}
            alt='icon'
            className={getClasses([
              styles.icon,
              validations.validationG
                ? styles['icon--valid']
                : styles['icon--invalid']
            ])}
          />
          <li
            className={getClasses([
              styles.condition,
              validations.validationG
                ? styles['condition--valid']
                : styles['condition--invalid']
            ])}
          >
            It cannot contain the number 0.
          </li>
        </div>
        <div className={styles.list}>
          <img
            src={validations.validationH ? check : cross}
            alt='icon'
            className={getClasses([
              styles.icon,
              validations.validationH
                ? styles['icon--valid']
                : styles['icon--invalid']
            ])}
          />
          <li
            className={getClasses([
              styles.condition,
              validations.validationH
                ? styles['condition--valid']
                : styles['condition--invalid']
            ])}
          >
            It cannot contain any space ' '.
          </li>
        </div>
      </ul>
    </div>
  )
}

export default Conditions
