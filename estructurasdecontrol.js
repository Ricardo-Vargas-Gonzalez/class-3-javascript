//Se llaman estructuras de control porque podemos controlar el flujo de nuestro programa, existiendo alrededor de 5 o 6, tecnicament 14 statements de control
// CICLO FOR

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

console.log("____________________________")

//If- Else If- Else
function validarEdad(edad) {
    if(confirm('¿Estas de acuerdo en continuiar con esto?')) {
        console.log("Sigue baho tu propio riesgo");
        if (edad >= 18 && edad <= 150) {
            console.log("ya puede ir el sat por ti");
        } else if (edad > 150 ) {
            console.log("antiguos espiritus transformen este cuerpo decadente...");
        } else if  (edad >= 0) {
            console.log("tas chavo chavo");
        } else {
            console.log("¿Como es que existes?")
        }
    } else  {
        console.log("Que cachorrito... XD");
    }
}

function mandarMensajes(edad) {
    switch(edad) {
        case 13 :
            console.log("regresa a la escuela pequeño");
            break;
        case 17:
            console.log("Amo su inocencia....");
            break;
        case 5:
            validarEdad(edad);
        default:
            console.log("XD");
    }
}

let edad = prompt("Introduce tu edad");
if (edad && !isNaN(edad)) {

    edad = Number(edad);

    validarEdad(edad)
    mandarMensajes(edad);
} else {
    alert("Debes Introducir tu edad");
    location.reload();
}

//------------------------------------
// While
let boletosDisponibles = 10;

while (boletosDisponibles > 0) {
    console.log("Boleto comprado para el Corona Capital")
    boletosDisponibles--;
    console.log("Quedan: " + boletosDisponibles)
    console.log("__________________")
}


// Do while
do {
    console.log("Boleto comprado para el Corona Capital")
    boletosDisponibles--;
    console.log("Quedan: " + boletosDisponibles)
} while (boletosDisponibles > 0);


//------------------
// TRY CATCH finally, no es una estructura de control es un error handeling, ayuda a que JavaScript no de el error directamente, sino que sobreescriba el código 
try {
    // Código susceptible a fallar
    throw "orden 66"
} catch (error) {
    console.error("ERRRRROOOOOOOOR");
    console.warn(error)
} finally {
    console.warn("Tu crush no te quiere :(");
}
//puede existir infinidad de lineas de codigo, pero donde se detecta el error, ahi se deja de ejecutar y pasa al finally, el cula siempre se ejecutará