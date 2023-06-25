import { ProductMemoryService } from "./services/product-memory.service";
import { Product } from "./model/product.model";
import { CreateProductDto } from "./dtos/product.dto";

const productService = new ProductMemoryService();

//create
const product: CreateProductDto = {
  title: 'Camisa de Verano',
  price: 10.33,
  categoryId: 1,
  description: '',
  images: []
};
const rowProduct: Product = productService.create(product);
const dataProduct: Product[] = productService.getAll();
console.log('create',dataProduct);

//update
const ProductId: number =  dataProduct[0].id;
const rowProductUpdate = {
  title: 'Casaca de Infoerno Polar',
  price: 99999.99,
  description: 'Agregado por cambio de estación.'
};
const changeProductUpdate: Product = productService.updateProduct(ProductId, rowProductUpdate);
console.log(changeProductUpdate);
console.log('update',productService.findOne(ProductId));
