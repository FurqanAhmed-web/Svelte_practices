export const load = async ({ fetch, data }) => {
  console.log('load function in runing');
  const res = await fetch("https://dummyjson.com/users");
  const user = await res.json();
  const title = "User List";

  return {
    usertitle: title,
    userlist: user.users,
    producttitle: data.title,
    productlist: data.productlist,
  };
};

export const prerender = true;