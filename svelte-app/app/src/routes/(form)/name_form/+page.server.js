// @ts-nocheck

export const actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");
    if (!username || !password) {
      return { message: "missing username or password"};
    }
    console.log(username, password);
    cookies.set("username", username, { path: "/" });
    return { message: "Logged in" };
  },
  register: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");
    if (!username || !password) {
      return { message: "missing username or password"};
    }
    console.log(username, password);
    cookies.set("username", username, { path: "/" });
    return { message: "Successfully Registered" };
  }
};
