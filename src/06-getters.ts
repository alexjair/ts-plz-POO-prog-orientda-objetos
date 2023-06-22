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

  //getter y setter

  get getDay(): number{
    return this.day;
  }

  get getIsLeapYear(): boolean{
    if (this.year % 400 === 0) return false;
    if (this.year % 100 === 0) return true;
    return this.year % 4 === 0;
  }

}

const myFecha = new MyClase(2024,7,10);
console.log(myFecha.funPrintFormat());
console.log('getDay',myFecha.getDay);
console.log('getIsLeapYear',myFecha.getIsLeapYear);
console.log(myFecha.funPrintFormat());

const myFecha1 = new MyClase(2023,3,16);
console.log(myFecha1.funPrintFormat());
console.log('getDay',myFecha1.getDay);
console.log('getIsLeapYear',myFecha1.getIsLeapYear);
console.log(myFecha1.funPrintFormat());
