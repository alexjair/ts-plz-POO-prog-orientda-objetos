import axios from "axios";

import { Category } from "./../model/category.model";
import { Product } from "./../model/product.model";

export class BaseHttpService<TypeClass> {
  constructor(
    protected url: string,
  ) { }

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url)
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

(async()=> {
  const url1 = 'https://api.escuelajs.co/api/v1/products'

  const productService = new BaseHttpService<Product>(url1)
  const rta = await productService.getAll()
  console.log('products: ', rta.length)
  console.log('products[0]: ', rta[0])

  const url2 = 'https://api.escuelajs.co/api/v1/categories'
  const categoryService = new BaseHttpService<Category>(url2)
  const rta2 = await categoryService.getAll()
  console.log('categories: ', rta2.length)
  console.log('categories [0]: ', rta2[0])
})()
