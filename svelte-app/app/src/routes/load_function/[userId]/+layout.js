// @ts-nocheck
import { error, redirect } from "@sveltejs/kit";

export const load = async ({ fetch, params, parent }) => {
  const { userId } = params;
  const id = parseInt(userId);
  const parentlayout = await parent();
  const { admin } = parentlayout;

  if (id > 20) {
    //  throw redirect(307, "/load_function");

    throw error(404, {
      message: "Invalid id number",
      hint: "try userId below 20",
    });
  }
  const res = await fetch(`https://dummyjson.com/users/${userId}`);
  const user = await res.json();
  const title = "User Description";

  return {
    admin: admin,
    title: title,
    user: user,
  };
};
