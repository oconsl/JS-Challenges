const password = '46%2As@24santiago'

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

const validationA = (password) => {
  return password.length >= 16
}

const validationB = (password) => {
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

const validationC = (password) => {
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

const validationD = (password) => {
  const chars = password.split('')
  const numbersArray = chars.filter((char) => isNumber(char))

  return numbersArray.length >= 4
}

const validationE = (password) => {
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

const validationF = (password) => {
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

const validationG = (password) => {
  const chars = password.split('')

  return !chars.some((char) => char === '0')
}

const validationH = (password) => {
  const chars = password.split('')

  return !chars.some((char) => char === ' ')
}

const validation = (password) => {
  return (
    validationA(password) &&
    validationB(password) &&
    validationC(password) &&
    validationD(password) &&
    validationE(password) &&
    validationF(password) &&
    validationG(password) &&
    validationH(password)
  )
}

console.log('Tiene 16 o más caracteres: ', validationA(password)) // SI
console.log('\nMinúscula y mayúscula: ', validationB(password)) // SI
console.log('\nNo tiene 2 letras iguales seguidas: ', validationC(password)) // SI
console.log('\nTiene 4 o más números: ', validationD(password)) // SI
console.log('\nNo tiene 2 números iguales seguidos: ', validationE(password)) // SI
console.log('\nCondición caracteres especiales: ', validationF(password)) // SI
console.log('\nNo tiene el número 0: ', validationG(password)) // SI
console.log('\nNo tiene espacios: ', validationH(password)) // SI
console.log('\n\nValidación FINAL: ', validation(password)) // SI
