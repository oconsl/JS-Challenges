import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Button } from '@mui/material'
import { getPokemonNamesAndIDs, getPokemonDataByNameOrID } from '../../services'
import styles from '../../styles/modules/search.module.scss'

const Search = ({ setPokemonData }) => {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const [search, setSearch] = useState('')
  const loading = open && options.length === 0

  const handleChange = (event) => {
    setSearch(() => event.target.innerText)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    Promise.all([getPokemonDataByNameOrID(search)]).then((res) =>
      setPokemonData(res[0])
    )
  }

  useEffect(() => {
    if (!open) setOptions([])
  }, [open])

  useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    ;(async () => {
      if (active) {
        Promise.all([getPokemonNamesAndIDs()]).then((res) =>
          setOptions([...res[0].namesArray, ...res[0].idsArray])
        )
      }
    })()

    return () => {
      active = false
    }
  }, [loading])

  return (
    <Box className={styles.container}>
      <Autocomplete
        className={styles.input}
        id='pokemon-async'
        open={open}
        disableClearable
        onOpen={() => {
          setOpen(true)
        }}
        onClose={() => {
          setOpen(false)
        }}
        isOptionEqualToValue={(option, value) => option === value}
        getOptionLabel={(option) => option}
        options={options}
        onChange={handleChange}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            variant='outlined'
            required
            label={'Pokemon'}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color='inherit' size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              )
            }}
          />
        )}
      />
      <Button
        className={styles.button}
        variant='contained'
        color='success'
        endIcon={<SearchIcon />}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  )
}

export default Search
