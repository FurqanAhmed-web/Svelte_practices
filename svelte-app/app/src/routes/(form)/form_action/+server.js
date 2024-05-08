// @ts-nocheck
import { json } from "@sveltejs/kit";
export async function POST({ request, cookies }) {
  const data = await request.json();
  const { username, password } = data;
  if (!username || !password) {
    return json({ message: "missing username or password", status: 400 });
  }
  console.log(username,password);
  cookies.set("username", username, { path: "/" });
  return json({ message: "Logged in" });
}
