// Ejercicio 11
// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
// pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let n = 0
  for (const element of param) {
    if (typeof element == 'number') {
      n = n + element
    } else if (typeof element == 'string') {
      n = n + element.length
    } else {
      n = n + 0
    }
  }
  let result = n / param.length
  return result
}

console.log(averageWord(mixedElements))
