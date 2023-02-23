// La pila es una estructura de datos, para almacenar datos, que sigue una modalidad LIFO (Last In First Out)
class Pila {

    constructor() {
        //un atributo es una caracteristica de la clase, hay atributos que son constantes y que no se pueden cambiar, con la palabra reservada this le dices a javascrip el atributo de esta clase va a empezar ...
        this.pila = {} ;
        this.contador = 0;
    }

    //Mete un elemento al final de la pila
    push(element) {
        this.pila[this.contador] = element;
        this.contador++;
        return this.pila;
    }

    // Sacar el ultimo elemento y devolverlo
    por() {
        this.contador--;
        const element = this.pila[this.contador];
        delete this.pila[this.contador];
        return element;
    }

    // Solo muestra el ultimo elemento
    peek() {
        return this.pila[this.contador -1];
    }

    // Devuelve el tamaño de la pila 
    size() {
        return this.contador;
    }

    print() {
        console.log(this.pila)
    }

}

const miPila = new Pila();
console.log(miPila.size);
console.log(miPila.print());
console.log(miPila.push("La roca"));
miPila.print();
console.log(miPila.push("5"));
console.log(miPila.pop());
console.log(miPila.print());