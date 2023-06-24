/*

Singleton: constructor privado
+++++++++

Singleton nos previene crear múltiples instancias de una clase.
Esto es muy usado en Arquitectura de Software, pues nos ayuda a ahorrar uso de memoria.

Propósito:

Singleton es un patrón de diseño creacional que nos permite asegurarnos de que una clase
tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia.

ver:
https://youtu.be/GGq6s7xhHzY?list=PLJkcleqxxobUJlz1Cm8WYd-F_kckkDvc8

*/
export class MyService {
  private static instance: MyService | null = null;

  private constructor(
    private name: string
  ) {}

  get Name() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('Creating new instance');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('MyService1');
console.log(myService1.Name)

const myService2 = MyService.create('MyService2');
console.log(myService2.Name)

const myService3 = MyService.create('MyService3');
console.log(myService3.Name)

console.log(myService1 === myService2); //* true
console.log(myService1 === myService3); //* true
