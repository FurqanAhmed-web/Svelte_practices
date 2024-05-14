import { _product } from "./+page.js";
import { json } from "@sveltejs/kit";

export function GET() {
  return json(_product.products);
}

export async function POST(requestevent) {
  const { request } = requestevent;
  const { brand, price } = await request.json();
  const newproduct = {
    id: _product.products.length,
    brand: brand,
    price: price,
  };
  _product.products = [..._product.products, newproduct];
  return new Response("Data added successfully");
}
