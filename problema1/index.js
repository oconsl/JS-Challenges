const x = -5
const y = 3

const newMultiply = (x, y) => {
  // Control de signo de X
  const negativeFlag = Math.sign(x) === -1

  // Si X es 0 devuelvo 0
  if (x === 0) return 0

  // Declaro un array de X elementos
  const array = new Array(Math.abs(x))

  // Le asigno a cada elemento del array el valor Y basado en signo de X
  negativeFlag ? array.fill(-y) : array.fill(y)

  // Uso reduce para devolver la suma total => sumo Y, X veces === x*y
  return array.reduce((acc, current) => acc + current, 0)
}

let result = newMultiply(x, y)
console.log(result)
