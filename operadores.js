let lista = []

let x = 5
let y = 10

// asignacion de edición
x += y // Es exactamente lo mismo que hace esto: x = x ´y
x += y

lista.push(x)
console.log(x);

// asignación de resta
y -= x

console.log(y)

// Asignación de multiplicación
x *= y

console.log("x = " + x)

x = 5
y = 10

// Operador de bit a bit de Desplazamiento a la izquierda, desplaza 10 lugares, en este caso a la izquierda
x <<= y

console.log("x = " + x)

x = 5
y = 11

// Asignación de modulo o residuo
console.log(y % x)

y % n

console.log("Y = " + y)