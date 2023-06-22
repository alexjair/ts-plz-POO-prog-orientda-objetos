//CLASE PADRE
export class Animal {
  constructor(
    public name: string,
  ){}

  funSaludar(){
    return `Hola soy una Animal my name ${this.name}`;
  }

  funCorrer(){
    return `Me estoy moviendo`;
  }

  protected funMisDatos(){
    console.log('Metodo protegido');
  }

  private funPrivate(){
    console.log('Metodo provado');
  }
}

const objAnimal = new Animal('Monchi');
console.log(objAnimal.funSaludar());
console.log(objAnimal.funCorrer());

//CLASE HIJO
export class Dog extends Animal {
  constructor(
    name: string,
    public raza: string,
  ){
    super(name);
  }

  funSaludar(){
    return `Hola soy una Perro my name '${this.name}' y mi raza es '${this.raza}'`;
  }

  funLadrar(): void {
    for (let index = 0; index < 4; index++) {
      console.log(`Guauf!!! (labrar) soy ${this.name}`);
    }
  }
}
const objDog = new Dog('Rocky','Pequines');
console.log(objDog.funSaludar());
console.log(objDog.funCorrer());
objDog.funLadrar();
objDog.name = 'Pocho';
objDog.funLadrar();





