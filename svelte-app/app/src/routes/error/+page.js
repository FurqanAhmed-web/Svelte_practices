// @ts-nocheck
import { error } from "@sveltejs/kit";

export async function load({ parent }) {
  const data = await parent();

  if (data.layer === 2) {
    return error(404, "Not found");
  }

  const { value, layer } = data;
  console.log(value);
  return {
    layer: layer + 1,
    value: value,
    title: "Hello world!",
  };
}
