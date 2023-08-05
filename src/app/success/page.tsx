import { URLSearchParams } from "url"
import { stripe } from "../lib/stripe";
import Image from "next/image"
import Link from "next/link";
import {notFound} from "next/navigation"
import { Metadata } from "next";

interface TypeSuccess{

    // searchParams:URLSearchParams;
    searchParams:{
        session_id:string;
    }
}


export const metadata:Metadata={
    title: 'Compra efetuada | Ignite Shop',
}

export default async function Success({searchParams}:TypeSuccess ){

    if(!searchParams.session_id){
        return(
            <> 
                <p>not found</p>
                <Link href={'/'}> return to home</Link>
            </>
            // notFound()
        )
    }

    const checkout = await stripe.checkout.sessions.listLineItems(searchParams.session_id,{
        limit:1
    })
    const checkoutItem = checkout.data[0];
    const product = await stripe.products.retrieve(checkoutItem.price?.product as string)

    return(
        <>
            <Image src={product.images[0]} width={520} height={480} alt={""}/>
            <h1>Name: {product.name}</h1>
            <h1>Price: {checkoutItem.price?.unit_amount}</h1>
            <h1>Description: {product.description}</h1>
        </>
    )
}