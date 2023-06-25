import { UpdateProductDto } from "./../dtos/product.dto";
import { Product } from "./../model/product.model";
import { BaseHttpService } from "./base-http.service";
import { ProductHttpService } from "./product-http2.service";

//heredada

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    // permisos
    // logica
    //this.http.otroRequest();
    return this.http.update(id, dto);
  }
}
