import styles from "./style.module.css";
import Image from "next/image";
import shirt1 from '../../../../public/assets/shirt1.png'
import Stripe from "stripe";

export interface TypeProduct{

    product:{
        id: string,
        name: string,
        imageUrl: string,
        description: string | null,
        price: Stripe.Price,
    }
}

export function Shirt({product}:TypeProduct){

    const priceFormatted = new Intl.NumberFormat('pt-br',{
        style: 'currency',
        currency: 'brl',
    }).format(Number(product.price.unit_amount)/100)

    return(
        <div className={`${styles.shirtContainer}`}>
            <Image src={product.imageUrl} 
                alt=""
                width={520}
                height={480}
                />
            <div className={`${styles.description}`}>
                {product.name}
                <span className={`${styles.spanStyle}`}>{priceFormatted}</span>
            </div>
        </div>
    );
}