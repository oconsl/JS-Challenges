const isLetter = (char) => {
  const charCode = char.charCodeAt(0)
  let isValid = false

  if (charCode >= 97 && charCode <= 122) {
    isValid = true
  } else if (charCode >= 65 && charCode <= 90) {
    isValid = true
  }

  return isValid
}

const isNumber = (char) => {
  const charCode = char.charCodeAt(0)
  let isValid = false

  if (charCode >= 49 && charCode <= 57) isValid = true

  return isValid
}

export const validationA = (password) => {
  return password.length >= 16
}

export const validationB = (password) => {
  const chars = password.split('')
  const lettersArray = chars.filter((char) => isLetter(char))
  const lettersString = lettersArray.join('')
  let haveLowerCase = false
  let haveUpperCase = false

  lettersArray.forEach((_, index) => {
    const charCode = lettersString.charCodeAt(index)
    if (charCode >= 97 && charCode <= 122) {
      haveLowerCase = true
    } else if (charCode >= 65 && charCode <= 90) {
      haveUpperCase = true
    }
  })

  return haveLowerCase && haveUpperCase
}

export const validationC = (password) => {
  const chars = password.split('')
  const lettersArray = chars.map((char) => {
    if (isLetter(char)) return char
    return ' '
  })
  const lettersToLowerCase = lettersArray.map((letter) => letter.toLowerCase())

  let isValid = true

  lettersToLowerCase.forEach((char, index) => {
    if (char !== ' ') {
      isValid = isValid && char !== lettersToLowerCase[index + 1]
    }
  })

  return isValid
}

export const validationD = (password) => {
  const chars = password.split('')
  const numbersArray = chars.filter((char) => isNumber(char))

  return numbersArray.length >= 4
}

export const validationE = (password) => {
  const chars = password.split('')
  const numbersArray = chars.map((char) => {
    if (isNumber(char)) return char
    return ' '
  })
  let isValid = true

  numbersArray.forEach((number, index) => {
    if (number !== ' ') {
      isValid = isValid && number !== numbersArray[index + 1]
    }
  })

  return isValid
}

export const validationF = (password) => {
  const chars = password.split('')
  const specialChars = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '-',
    '_',
    '+',
    '=',
    '?'
  ]
  const usedSpecialChars = []
  const usedSpecialIndex = []
  let isValid = true

  chars.forEach((char, index) => {
    if (specialChars.includes(char)) {
      usedSpecialChars.push(char)
      usedSpecialIndex.push(index)
    }
  })

  usedSpecialIndex.forEach((special, index) => {
    isValid = isValid && special !== usedSpecialIndex[index + 1] - 1
  })

  isValid =
    isValid &&
    usedSpecialChars.length >= 2 &&
    usedSpecialChars.length === [...new Set(usedSpecialChars)].length

  return isValid
}

export const validationG = (password) => {
  const chars = password.split('')

  return !chars.some((char) => char === '0')
}

export const validationH = (password) => {
  const chars = password.split('')

  return !chars.some((char) => char === ' ')
}
