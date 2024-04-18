// Ejercicio 12
// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
// pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  const arrayUniques = []
  for (const element of param) {
    if (arrayUniques.indexOf(element) === -1) {
      arrayUniques.push(element)
    }
  }
  return arrayUniques
}

// function removeDuplicates(param) {
//   const uniqueElements = [...new Set(param)];
//   return uniqueElements;
// }

// const duplicates = [
//   'sushi',
//   'pizza',
//   'burger',
//   'potatoe',
//   'pasta',
//   'ice-cream',
//   'pizza',
//   'chicken',
//   'onion rings',
//   'pasta',
//   'soda'
// ];

console.log(removeDuplicates(duplicates))
