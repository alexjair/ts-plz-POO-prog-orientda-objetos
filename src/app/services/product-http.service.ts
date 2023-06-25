import axios from "axios";
import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../model/product-service.model";
import { Product } from "../model/product.model";

export class ProductHttpService implements ProductService {

  private url ='https://api.escuelajs.co/api/v1/products';

  async getAll(): Promise<Product[]> {
    const resp = await axios.get<Product[]> (this.url);
    const { data } = resp;
    return data;
  }
  async updateProduct(id: Product['id'], changes: UpdateProductDto): Promise<Product> {
    const { data } = await axios.put<Product> (`${this.url}/${id}`, changes);
    return data;
  }
  async create(dto: CreateProductDto): Promise<Product> {
    const { data } = await axios.post<Product> (`${this.url}`, dto);
    return data;
  }
  async findOne(id: number): Promise<Product | undefined> {
    const { data } = await axios.get<Product> (`${this.url}/${id}`);
    return data;
  }

}
