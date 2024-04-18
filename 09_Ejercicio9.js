// Ejercicio 9
// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:

const numbers = [8, 12, -3, 65, 145, 37, 58, 1, 1, 200]

function sumAll(param) {
  let suma = 0
  for (number of param) {
    suma = suma + number
  }
  return suma
}

console.log(sumAll(numbers))
