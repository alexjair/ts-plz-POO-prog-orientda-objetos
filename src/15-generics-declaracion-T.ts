/*
Porqué la T en generics?
Lo más probable es que la letra predeterminada a usar sea T porque significa “Tipo(Type en Inglés)”,
entonces, al igual que en matemáticas, es convencional usar letras consecutivas para múltiples
variables que representan el mismo tipo de cosas, por lo que S, T, U, V son comunes. Además:

K se usa a menudo para un tipo de clave genérica
V para un tipo de valor asociado.
en algunos casos, E se usa para el tipo de “elementos” en una colección.

El uso de la letra "T" en los métodos genéricos, como en TypeScript (TS) o C#, es una convención
comúnmente utilizada para representar un parámetro de tipo genérico. La "T" se utiliza como un marcador
o símbolo que representa un tipo desconocido o no específico que será determinado en tiempo de
compilación o en el momento de uso del método

*/
import { Dog } from "./08-inheritance-atributes-super"

function getValue<T>(value: T) { //*Usar T es una convención para tus propios tipados
  return value;
}

getValue<number>(12).toFixed()
getValue<string>('12').length
getValue<boolean>(true).toString()

const doggy = new Dog('doggy', 'Snoop dog')
getValue<Dog>(doggy)


//////segundo ejemplo

class Generica<T> {
  // Se define una propiedad de tipo función generica
  suma?: (x: T, y: T) => T;
}

// Se instancia y se le da la funcionalidad
let instanciaArray = new Generica<(string | number)[]>();
instanciaArray.suma = function(x, y) {
  return [...x, ...y];
}

let variableArray = instanciaArray.suma(['a','b','c'] , ['1','2','3']);
console.log(variableArray);

//[ 'a', 'b', 'c', '1', '2', '3' ]
