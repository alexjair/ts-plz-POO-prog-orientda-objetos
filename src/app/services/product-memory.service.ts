import { faker } from '@faker-js/faker';

import { Product } from '../model/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

export class ProductMemoryService {
  private products: Product[] = [];

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.number.int(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        image: faker.image.url(),
      }
    }
    return this.add(newProduct);
  }

  //agregar al array
  add( data: Product  ){
    this.products.push(data);
    return data;
  }

   updateProduct (id: Product['id'], changes: UpdateProductDto ): Product {
    const index = products.findIndex(item => item.id === id);
    const prevData = products[index];
    products[index] = {
      ...prevData,
      ...changes
    }
    return products[index];
  }

  findOne(id: Product['id']){
    return this.products.find( item => item.id = id);
  }
}


export const products: Product[] = [];



