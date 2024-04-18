// Ejercicio 23
// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

const litFilm = []
const midFilm = []
const bigFilm = []

for (let i = movies.length - 1; i >= 0; i--) {
  if (movies[i].durationInMinutes < 100) {
    litFilm.push(movies[i])
  } else if (
    movies[i].durationInMinutes >= 100 &&
    movies[i].durationInMinutes <= 200
  ) {
    midFilm.push(movies[i])
  } else {
    bigFilm.push(movies[i])
  }
}

console.log('Las películas pequeñas son:')
console.log(litFilm)
console.log('Las películas medianas son:')
console.log(midFilm)
console.log('Las películas grandes son:')
console.log(bigFilm)
