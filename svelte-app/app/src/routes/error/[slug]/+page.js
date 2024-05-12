// @ts-nocheck
import { error } from "@sveltejs/kit";

export function load({ params }) {
  const setpath = params.slug;
  if (params.slug !== "run") {
    return {
      path: setpath,
      title: "Hello world!",
      content: "Welcome to our blog. Lorem ipsum dolor sit amet...",
    };
  }
  error(404, "Not found");
}
