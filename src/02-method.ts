//Definir Clase
export class MyClase {
  year: number;
  month: number;
  day: number;

  constructor(
    _year: number,
    _month: number,
    _day: number
  ){
      this.year = _year;
      this.month = _month;
      this.day = _day;
  }

  //Metodos
  funPrintFormat(): string {
    return `La fecha es ${this.year}-${this.month}-${this.day}`;
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
}

const myFecha = new MyClase(2023,3,4);
console.log(myFecha.funPrintFormat());
myFecha.funAddDate(4,'days');
console.log(myFecha.funPrintFormat());


