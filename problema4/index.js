const numbersArray = [4, 1002, 6, 12, 1075, -5, 123, 4, 0, 8, 6]

const elementsCount = (numbers) => {
  return `El array tiene: ${numbers.length} elementos.\n\n`
}

const evenAndOddPercents = (numbers) => {
  const evenCount = numbers.filter((number) => number % 2 === 0).length
  const evenPercentage = Math.trunc((evenCount / numbers.length) * 10000) / 100
  const oddPercentage = Math.trunc((100 - evenPercentage) * 100) / 100

  return `Porcentaje de números pares: ${evenPercentage}%\nPorcentaje de números impares: ${oddPercentage}%\n\n`
}

const higherThanThousandPercent = (numbers) => {
  const higherThanThousandCount = numbers.filter(
    (number) => number > 1000
  ).length
  const percentage =
    Math.trunc((higherThanThousandCount / numbers.length) * 10000) / 100

  return `Porcentaje de números mayores a 1000: ${percentage}%\n\n`
}

const maxAndMinValues = (numbers) => {
  return `Mayor valor: ${Math.max(...numbers)}\nMenor valor: ${Math.min(
    ...numbers
  )}\n\n`
}

const relativePercents = (numbers) => {
  const maxNumber = Math.max(...numbers)
  const minNumber = Math.min(...numbers)
  const minRelativePercentage = Math.abs(
    Math.trunc((minNumber / maxNumber) * 10000) / 100
  )
  const totalSum = numbers.reduce((acc, current) => acc + current, 0)
  const averageRelativePercentage = Math.abs(
    Math.trunc((totalSum / numbers.length / maxNumber) * 10000) / 100
  )

  return `Porcentaje relativo a ${maxNumber} del menor número: ${minRelativePercentage}%\nPorcentaje relativo a ${maxNumber} del promedio general: ${averageRelativePercentage}%\n\n`
}

console.log(elementsCount(numbersArray))
console.log(evenAndOddPercents(numbersArray))
console.log(higherThanThousandPercent(numbersArray))
console.log(maxAndMinValues(numbersArray))
console.log(relativePercents(numbersArray))
