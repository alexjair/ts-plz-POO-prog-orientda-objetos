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

