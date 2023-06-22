const date = new Date();
console.log(date.getHours());

const date2 = new Date(1984,4,4,12,30,35);
console.log(date2);

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
}

const myFecha = new MyClase(1984,3,4);
console.log('nyFecha',myFecha);
console.log('year',myFecha.year);



