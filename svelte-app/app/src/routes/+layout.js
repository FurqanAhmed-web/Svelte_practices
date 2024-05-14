import { error } from "@sveltejs/kit";

export function load({ data }) {
  if (data.admin !== "Furqan") {
    return error(404, "Not found");
  }
  return {
    // @ts-ignore
    value: data.admin,
    layer: 1,
  };
}
