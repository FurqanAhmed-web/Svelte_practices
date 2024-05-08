//load function should be pure

export const load = async ({ fetch }) => {
  const res = await fetch("https://dummyjson.com/products");
  const product = await res.json();
  const title = "New Mobile List";
  return {
    title: title,
    productlist: product.products,
  };
};
 