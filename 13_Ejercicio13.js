// Ejercicio 13
// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

nameFinder.indexOf('fer')

function finderName(paramA, paramB) {
  const firstNamePosition = 1
  if (nameFinder.indexOf(paramB) != -1) {
    let namePosition = nameFinder.indexOf(paramB) + firstNamePosition
    return `El nombre ${paramB} aparece en la lista en la posición ${namePosition}`
  } else {
    return false
  }
}

console.log(finderName(nameFinder, 'Marc'))
