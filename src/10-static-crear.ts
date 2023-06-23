/*
Propiedades estáticas
Las propiedades estáticas pertenecen a la clase y no a las instancias de la clase. Se las define
antecediendo el modificador 'static'.

Con un ejemplo quedará claro este tipo de propiedades:

class Dado {
  private valor: number;
  static tiradas:number=0;
  tirar() {
    this.generar();
  }

  private generar() {
    this.valor = Math.floor(Math.random() * 6) + 1 ;
    Dado.tiradas++;
  }

  imprimir() {
    console.log(`Salió el valor ${this.valor}`);
  }
}

let dado1=new Dado();
dado1.tirar();
dado1.imprimir();
let dado2=new Dado();
dado2.tirar();
dado2.imprimir();
console.log(`Cantidad de tiradas de dados:${Dado.tiradas}`); // 2
Una propiedad estática requiere el modificador 'static' previo a su nombre:

static tiradas:number=0;

Para acceder a dichas propiedades debemos anteceder el nombre de la clase y no la palabra clave 'this':

Dado.tiradas++;

No importan cuantos objetos de la clase se definan luego todos esos objetos comparten la misma
variable estática:

let dado1=new Dado();
dado1.tirar();
dado1.imprimir();
let dado2=new Dado();
dado2.tirar();
dado2.imprimir();
console.log(`Cantidad de tiradas de dados:${Dado.tiradas}`); // 2
Es por eso que la propiedad 'tiradas' almacena un 2 luego de tirar el primer y segundo dado.

La propiedad 'valor' es independiente en cada dado pero la propiedad 'tiradas' es compartida por los
dos objetos.
*/
console.log(Math.PI);
console.log(Math.max(1,2,3,4,53,6,7,8));

//Ejemplo
class MyMath {
  static readonly pi = 3.1425;

  static max (...numbers: number[]) {
    console.log(numbers);
    return numbers.reduce((max, item)=> max >= item ? max: item, numbers[0]);
  }

}

console.log(MyMath.pi);
console.log(MyMath.max(1,2,3,4,5,6));
console.log(MyMath.max(-1,-2,-3,-4,-5,-6,1,2,3));
const number2 = [-1,2,-3,4,-5,-6,7];
console.log(MyMath.max(...number2));

