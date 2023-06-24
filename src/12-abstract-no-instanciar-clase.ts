/*
En conclusión, cada vez que implementamos una clase abstracta, no podemos crear instancias de esa
clase, si no solo de las clases hijas.

abstract class Pet {} // no instancias de esta clase
class Dog extends Pet {} // de esta si p

Las clases abstractas son tan ‘genericas’ que no tiene sentido que sean instanciadas. Usamos la keyword
abstract.
*/

enum DIRECTIONS {
  UP = 1,
  DOWN = -1,
  LEFT = -1,
  RIGHT = 1
}

export abstract class Animal {

  public name : string;
  protected position : [number , number ] = [0,0];

  constructor(name:string){
      this.name = name;
  }

  move(direction : DIRECTIONS) : number[]{
      if(direction === DIRECTIONS.UP || direction===DIRECTIONS.DOWN){
          this.position[0] += direction;
      }else{
          this.position[1] += direction;
      }
      return this.position;
  }

  abstract sound() : void ;

}

class Dog extends Animal{

  public owner : string;

  constructor(name: string, owner: string){
      super(name);
      this.owner = owner; //dueña
  }

  sound(): void {
      console.log("WOOF");
  }

}

const Loki = new Dog("Loki","Nico");
console.log(Loki.move(DIRECTIONS.DOWN));
Loki.sound();
