// @ts-nocheck
import { _product } from "../+page";
import { json } from "@sveltejs/kit";

export function GET(requestEvent) {
  //console.log(_product.products);
  const { params } = requestEvent;
  const { productId } = params;
  const product = _product.products.find(
    (product) => product.id === parseInt(productId)
  );

  return json(product);
}

export async function PATCH(requestEvent) {
  console.log(_product.products);
  const { params, request } = requestEvent;
  const { productId } = params;
  const { brand } = await request.json();
  const product = _product.products.find(
    (product) => product.id === parseInt(productId)
  );
  product.brand = brand;
  return json(product);
}

export async function DELETE(requestEvent) {
  const { params } = requestEvent;
  const { productId } = params;
  const delproduct = _product.products.find(
    (product) => product.id === parseInt(productId)
  );
  const index = _product.products.findIndex(
    (product) => product.id === parseInt(productId));
    _product.products.splice(index,1)
    return json(delproduct)
}
