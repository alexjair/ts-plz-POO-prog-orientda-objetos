//Definir Clase
export class MyClase {

  //Forma corta del constructor
  //Al declara private o public de forma explicita, asiganara a la clase
  //Valores por defecto
  constructor(
    public year: number = 1900,
    public month: number = 1,
    private day: number = 1
  ){}

  //Metodos
  funGetDay(): number{
    return this.day;
  }

  funPrintFormat(): string {
    const day  = this.funAddPadding(this.day);
    const month  = this.funAddPadding(this.month);
    return `La fecha es ${this.year}-${month}-${day}`;
  }

  funAddDate(amount: number, type: 'days'|'months'|'years') {
    if(type === 'days'){
      this.day += amount;
    }
    if(type === 'months'){
      this.month += amount;
    }
    if(type === 'years'){
      this.year += amount;
    }
  }

  private funAddPadding(value: number): string{
    if(value < 10){
      return `0${value}`;
    }
    return `${value}`;
  }
}

const myFecha = new MyClase();
const myFecha1 = new MyClase(2000);
const myFecha2 = new MyClase(2000,12);
console.log(myFecha.funPrintFormat());
console.log(myFecha1.funPrintFormat());
console.log(myFecha2.funPrintFormat());
