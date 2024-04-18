// Ejercicio 21
// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto
// "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

const youngUsers = []
const oldUsers = []

for (let i = users.length - 1; i >= 0; i--) {
  if (users[i].years < 18) {
    youngUsers.push(users[i])
  } else {
    oldUsers.push(users[i])
  }
}
console.log('Usuarios menores de edad:', youngUsers)
console.log('Usuarios mayores de edad:', oldUsers)
