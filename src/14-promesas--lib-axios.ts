/*
Tipado y promesas
const variableName = new Promese<dataType>(...);
*/

import axios from "axios";

//Declarar una funcion de uso async de deb declarar "async"
( async () => {

    //declaramos funcion, que con un fin async
    function delay(vTimeEspera: number){

        //declara promesa nativa, donde 'Promise' es el construcctor
            //const promise = new Promise(
        //tipado de la promesa<boolean>
        //tipado de la promesa<string>
        const promise = new Promise<string>(
            (resolve) =>{
                //para emular el async de debe esperar un time (segundos)
                setTimeout(
                    ()=>{
                        resolve('Hola msg despues del time.');
                    }, vTimeEspera
                );
            }
        );
        return promise;
    }

    //el uso de 'await' para perdir algo de forma asincronica
    console.log('>>inicio');
    const resp = await delay(2000);
    console.log('resp',resp);
    console.log('resp',resp.toUpperCase());

    //2da function
    async function getProductAsync(){
        const resp = await axios.get('https://api.escuelajs.co/api/v1/products');
        return resp.data;
    }

    const products = await getProductAsync();
    console.log(products);

    //3er ejemplo
    async function getProductsV3() {
        const { data } = await axios.get('https://api.escuelajs.co/api/v1/products')
    return data
    }

    const productsV3 = await getProductsV3()
    console.log(productsV3)

})();


