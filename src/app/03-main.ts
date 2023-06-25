import { ProductHttpService } from './services/product-http.service';
import { Product } from './model/product.model';
import { Category} from './model/category.model';
import { CreateProductDto, UpdateProductDto } from './dtos/product.dto'

const myservice = new ProductHttpService;

( async ()=>{

  //ope
  console.log('...'.repeat(4));

  //select
  const dtProduct1: Product[] = await myservice.getAll();
  console.log('dtProduct1',dtProduct1.length);
  console.log('dtProduct1',dtProduct1[0]);

  //update
  const productId =  dtProduct1[0].id;
  const rowProduct2: UpdateProductDto = {
    title: '---new cambio---',
    price: 8888.88
  };
  const modProduct2: Product = await myservice.updateProduct(productId, rowProduct2);
  //console.log('modProduct2',modProduct2);
  const rowUpdateProduct = await myservice.findOne(productId)
  console.log(rowUpdateProduct);

  //other

})();



