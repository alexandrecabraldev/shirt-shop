import { NextRequest, NextResponse } from "next/server";
import { stripe } from "../lib/stripe";

export async function POST(request: NextRequest ){

    const {priceId} = await request.json();

    if(!priceId){
        return NextResponse.json({
            status:400,
            error:'price not found'
        })
    }
    const checkout = await stripe.checkout.sessions.create({
        success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url:`${process.env.NEXT_URL}`,
        mode:'payment',
        line_items:[
            {
                price:priceId,
                quantity:1,
            }
        ]
    })
    return(
        NextResponse.json(
            {checkoutUrl: checkout.url},
            {status:201}
        )
    )

}