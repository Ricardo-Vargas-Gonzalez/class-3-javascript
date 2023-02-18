let lista = []

let x = 5
let y = 10

// asignacion de edición
x += y // Es exactamente lo mismo que hace esto: x = x ´y
x += y

lista.push(x)
console.log(lista);

// asignación de resta
y -= x

lista.push(y);
console.log(lista);

// Asignación de multiplicación
x *= y

lista.push(y)
console.log(lista);

x = 5
y = 10

// Operador de bit a bit de Desplazamiento a la izquierda, desplaza 10 lugares, en este caso a la izquierda
x <<= y

lista.push(x);
console.log(lista);

x = 5;
y = 11;

// Asignación de modulo o residuo
console.log(y % x);

y %= n;

lista.push(y)
console.log(lista);

//estructura de control if
let var1 = 3;
let var2 = 4;

//operador igual
if (var1 == var2) {
    console.log("Son iguales");
} else {
    console.log("No son iguales ");
}

//operador estrictamente igual
if (var1 === '3') {
    console.log("Son iguales");
} else {
    console.log("No son iguales ");
}

//Operador de desigualdad
if (var1 != '4') {
    console.log("Son diferentes");
} else {
    console.log("No son diferentes ");
}

//Operador de deigualdad estricta
if (var1 !== '3') {
    console.log("Son diferentes");
} else {
    console.log("No son diferentes  ");
}

// > Mayor que
console.log(var1 > var2);

// < Menor que 
console.log(var1 < var2);
console.log(23 < 23);

// Menor o Igual que 
console.log(23 <= 23);

// Mayor o Igual que
console.log(23 >=  23);