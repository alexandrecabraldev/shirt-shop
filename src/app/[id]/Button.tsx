'use client'
import axios from "axios";
import { useState } from "react";
import Stripe from "stripe"

interface TypeButton{
    children:string[],
    price:Stripe.Price,
}

export function Button(props:TypeButton){

    const [isButtonEnable,setIsButtonEnable] = useState(false);

    async function handleClickButton(){

        try{
            setIsButtonEnable(true);
            const response = await axios.post('/api',{
                priceId:props.price.id,
            })
            const {checkoutUrl} = response.data;
            console.log(checkoutUrl)
    
            window.location.assign(checkoutUrl);
    
        }catch(error){
            
            setIsButtonEnable(false);
            alert('ERRO AQUI')
        } 
    }

    return(
        <button type="button" disabled={isButtonEnable} onClick={handleClickButton}>{props.children}</button>
    )
}