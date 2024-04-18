// Ejercicio 14
// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(paramA, paramB) {
  if (counterWords.indexOf(paramB) != -1) {
    let arraySameWords = counterWords.filter((elemento) => elemento == paramB)
    return `El elemento ${paramB} se repite ${arraySameWords.length} veces.`
  } else {
    return `El elemento ${paramB} no está en la lista.`
  }
}

console.log(repeatCounter(counterWords, 'code'))
