<script>
  import { page } from "$app/stores";
  export let data;
  const { usertitle, userlist, producttitle, productlist } = data;
</script>

<div class="w-screen grid grid-cols-1 justify-items-center">
  <h2 class="text-2xl text-center m-6">{usertitle}</h2>
  <div class="flex flex-row flex-wrap justify-center gap-4">
    {#each userlist as user}
      <a
        class="border-2 bg-red-300 border-slate-600 p-4 w-60"
        href="/load_function/{user.id}"
        ><h3 class="text-lg font-bold">{user.firstName}</h3>
        <h3 class="text-lg font-bold">{user.lastName}</h3>
        <p class="font-thin">{user.age}</p>
      </a>
    {/each}
  </div>

  <hr />
  <h2 class="text-2xl text-center m-6">{producttitle}</h2>
  <div class="flex flex-row flex-wrap justify-center gap-4">
    {#each productlist as product}
      <a
        href="/load_function/{product.id}"
        data-sveltekit-preload-data="off"
        class="border-2 bg-red-300 border-slate-600 p-4 w-60"
      >
        <h3 class="text-lg font-bold">{product.title}</h3>
        <h3 class="font-thin">{product.brand}</h3>
        <p>Descripton: <br /> {product.description}</p>
      </a>
    {/each}
  </div>
</div>
