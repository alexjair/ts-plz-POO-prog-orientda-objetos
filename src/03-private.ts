//Definir Clase
export class MyClase {
  year: number;
  month: number;
  private day: number;

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

const myFecha = new MyClase(2023,3,4);
console.log(myFecha.funPrintFormat());
myFecha.funAddDate(4,'days');
console.log(myFecha.funPrintFormat());
//obtener day: private
console.log('Day',myFecha.funGetDay());


