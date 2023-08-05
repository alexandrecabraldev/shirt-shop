import { title } from "process";
import { stripe } from "../lib/stripe"
import { Button } from "./Button";

interface TypePageProduct{
    params:{
        id:string,
    }
}

export async function generateMetadata({params}: TypePageProduct){
    
    const product = await stripe.products.retrieve(params.id);

    return{
        title: `${product.name} | Ignite Shop`,
    }
}

export default async function PageProduct({params}:TypePageProduct){
    
    const product = await stripe.products.retrieve(params.id);
    const imageUrl = product.images[0];
    const price = await stripe.prices.retrieve(product.default_price as string)
    const priceFormatted = new Intl.NumberFormat('pt-br',{
        currency:'brl',
        style:'currency',
    }).format(Number(price.unit_amount)/100)

    return(
        <div>
            <h2>id: {params.id}</h2>
            <h2>name: {product.name}</h2>
            <h2>ImageUrl: {imageUrl}</h2>
            <Button price={price}>price: {priceFormatted}</Button>
        </div>
    )
}

//para testar o loading das páginas dinâmicas, retire o generateStaticParams e o dynamicParams, ou teste em modo desenvolvimento
export function generateStaticParams(){
    return[

        {id:'prod_OKWbhwVjRKytyQ'},
        {id:'prod_OKWZQvVywA0yWz'},
    ];
}

//para o valor false no dynamicParams, todas as páginas que não estiverem definidas no generateStaticParams retornarão 404
export const dynamicParams = true;