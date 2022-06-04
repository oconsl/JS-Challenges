import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import styles from '../../styles/modules/pokeCard.module.scss'

const PokeCard = ({ pokemonData }) => {
  return (
    <Box className={styles.container}>
      <Card sx={{ display: 'flex' }} className={styles.card}>
        <Box
          sx={{ display: 'flex', flexDirection: 'column' }}
          className={styles.info}
        >
          <CardContent sx={{ flex: '1 0 auto' }} className={styles.data}>
            <Typography component='div' variant='h5' className={styles.name}>
              {pokemonData.name}
            </Typography>
            {pokemonData.types.map((type) => {
              return (
                <Typography
                  variant='subtitle1'
                  component='div'
                  key={type.type.name}
                  className={`${styles.type} ${
                    styles[`type--${type.type.name}`]
                  }`}
                >
                  {type.type.name}
                </Typography>
              )
            })}
            <Typography variant='subtitle1' component='div'></Typography>
            <Typography
              variant='subtitle1'
              component='div'
              className={styles.more_info}
            >
              ID: {pokemonData.id}
            </Typography>
            <Typography
              variant='subtitle1'
              component='div'
              className={styles.more_info}
            >
              Weight: {pokemonData.weight}
            </Typography>
            <Typography
              variant='subtitle1'
              component='div'
              className={styles.more_info}
            >
              Height: {pokemonData.height}
            </Typography>
          </CardContent>
        </Box>
        <Box className={styles.image__container}>
          <CardMedia
            component='img'
            className={styles.image}
            sx={{ width: 151 }}
            image={
              pokemonData.sprites.other.dream_world.front_default ||
              pokemonData.sprites.front_default
            }
            alt='Pokemon'
          />
        </Box>
      </Card>
    </Box>
  )
}

export default PokeCard
