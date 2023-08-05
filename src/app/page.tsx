import Stripe from "stripe";
import Carousel from "./components/Carousel";
import { stripe } from "./lib/stripe";

export default async function Home() {

  const products = await stripe.products.list({
    expand:['data.default_price']
  })
  
  const filteredProducts = products.data.map((product)=>{
  
    return{
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      description: product.description,
      price: product.default_price as Stripe.Price,
    }
  })

  return (    
      <Carousel dataProducts={filteredProducts}/>
  )
}
