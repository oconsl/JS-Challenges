const getClasses = (array) => {
  return array
    .filter((word) => word !== '')
    .join(' ')
    .trim()
}

export default getClasses
