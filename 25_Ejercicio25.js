// Ejercicio 25
// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

let sellTotal = 0
let sellAvg = 0

for (const product of products) {
  sellTotal = sellTotal + product.sellCount
}

sellAvg = sellTotal / products.length

console.log(`La media de ventas es de ${sellAvg} unidades.`)
