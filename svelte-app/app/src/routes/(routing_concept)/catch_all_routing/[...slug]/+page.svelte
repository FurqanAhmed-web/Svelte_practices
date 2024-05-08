<script>
  import { page } from "$app/stores";
  const urlArr = $page.params.slug.split("/");
  console.log(urlArr);
</script>
<a href="/">Home Page</a>


{#if urlArr.length === 1}
  <h1 class="text-3xl font-bold flex justify-center items-center h-screen">
    {urlArr[0]} page
  </h1>
{:else if urlArr.length === 2}
  <h1 class="text-3xl font-bold flex justify-center items-center h-screen">
    {urlArr[0]} page with {urlArr[0]} no {urlArr[1]}
  </h1>
{:else if urlArr.length === 3}
  <h1 class="text-3xl font-bold flex justify-center items-center h-screen">
    {urlArr[0]} page with {urlArr[0]} no {urlArr[1]} and size {urlArr[2]}
  </h1>
{/if}
