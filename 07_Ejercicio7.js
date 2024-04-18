// Ejercicio 7
// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else {
    if (numberTwo > numberOne) {
      return numberTwo
    } else {
      return 'Los dos números son iguales'
    }
  }
}

let resultado = sum(1, 1.5)
console.log(resultado)
