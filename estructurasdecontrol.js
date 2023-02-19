//Se llaman estructuras de control porque podemos controlar el flujo de nuestro programa, existiendo alrededor de 5 o 6, tecnicament 14 statements de control
for (let i = 0; i < 19; i++) {
    if ((i % 2) != 0) {
        continue;
    }
    if (i == 10) {
        break;
    }
    console.log(i)
} // El for nos permite recorrer una lista, puedes usar cualquier letra pero se recomienda i
console.log("here I'm out")

var1 = null; //Es decir que el espacio de memoria no existe
// var2 = empty; 
var3 = "";
var4 = 0;
var5 = false;
var6 = undefined; //no sabe que existe algo, es la nada de la nada, que no está definida

console.log(var1); // Cuando sumas null + null da 0 esto en razón de que ese mas lo convierte a numero y como no hay mas, JavaScript, lo convierte a cero
//console.log(var2); empty no es un valor que le podamos asignar a la variable, es una palabra reservada que significa nada, es una linea vacía
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6); // Cuando sumas un undefined + undifined te da como resultado NaN, Not a Number, JavaScript no sabe sumarlo
//Cuando se asigna una variable se crea un espacio de memoria, el cual se llena con el valor que se le asigna

var6 = 5;
console.log(var6);