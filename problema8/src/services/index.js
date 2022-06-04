import axios from 'axios'

export const getCats = async (number) => {
  const res = await axios.get(
    `https://api.thecatapi.com/v1/images/search/?limit=${number}`
  )

  return res.data
}
