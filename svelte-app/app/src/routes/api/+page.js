// @ts-ignore
export let _product;

export const load = async ({ fetch }) => {
  const res = await fetch("https://dummyjson.com/products");
  const productdata = await res.json();
  _product = productdata;
  console.log("Get the product list!");
  return _product;
};
