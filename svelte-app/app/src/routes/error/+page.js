// @ts-nocheck
import { error } from "@sveltejs/kit";

export function load({parent}) {
  const data = parent()
  console.log(data);
  if (data) {
    return {
      layer: data.layer + 1,
      value: data.value,
      title: "Hello world!"
    };
  }
  error(404, "Not found");
}
