/*
Tipado y promesas
*/

import axios from "axios";
import { Product } from "./model/product.model";

//Declarar una funcion de uso async de deb declarar "async"
( async () => {

    //tipado axios!!: get<Product[]>
    async function getProductAsync(): Promise<Product[]> {
        const resp = await axios.get<Product[]> ('https://api.escuelajs.co/api/v1/products');
        const { data } = resp;
        return data;
    }

    //tipado force #2 :
    async function getProductAsyncV2(): Promise<Product[]> {
      const resp = await axios.get('https://api.escuelajs.co/api/v1/products');
      const dt = resp.data;
      return dt as Product[]; // cambia el tipado
    }

    const products = await getProductAsync();
    console.log('products1',products.map(
      item =>{
        return `${item.id} - ${item.title}`;
      }
    ));

    const productsV2 = await getProductAsyncV2();
    console.log('productsV2',productsV2.map(
      item =>{
        return `${item.id} - ${item.title}`;
      }
    ));

})();


