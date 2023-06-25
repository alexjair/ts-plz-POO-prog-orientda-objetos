import { Category } from './../model/category.model'

export class BaseHttpService<TypeClase> {

  public data: TypeClase[] = [];

  getAll(): TypeClase[] | Promise<TypeClase[]>{
    return [];
  }
}

const myservice = new BaseHttpService<string>;
myservice.data = ['a','b','c'];
const myservice2 = new BaseHttpService<number>;
myservice2.data = [1,2,3];
const myservice3 = new BaseHttpService<number | string>;
myservice3.data = [1,2,3,'a','b'];

const myservice4 = new BaseHttpService<Category>;
myservice4.getAll();


