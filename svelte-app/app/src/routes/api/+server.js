import { _product } from "./+page";
import { json } from "@sveltejs/kit";

export function GET() {
  //console.log(_product.products);
  return json(_product.products);
}

export async function POST(requestevent) {
    const {request} = requestevent 
    const {brand, price} = await request.json()
    const newproduct = {
        id: _product.products.length,
        brand: brand,
        price: price
    }
    _product.products.push(newproduct);
    return new Response('Date added succussfully')
}

