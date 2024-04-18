// Ejercicio 22
// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

const availableFruit = fruits

for (const food of foodSchedule) {
  if (food.isVegan === false) {
    if (availableFruit.length > 0) {
      food.name = availableFruit[0]
      food.isVegan = true
      availableFruit.shift()
    } else {
      food.name = 'No quedan más frutas disponibles'
      food.isVegan = '-'
    }
  }
}

console.log(foodSchedule)
