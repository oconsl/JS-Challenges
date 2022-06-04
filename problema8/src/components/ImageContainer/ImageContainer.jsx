import React from 'react'
import styles from '../../styles/modules/imageContainer.module.scss'

const ImageContainer = ({ images }) => {
  return (
    <div className={styles.container}>
      {images.map((image, index) => {
        return (
          <div key={index} className={styles.image__container}>
            <img src={image.url} alt='cat' className={styles.image} />
          </div>
        )
      })}
    </div>
  )
}

export default ImageContainer
