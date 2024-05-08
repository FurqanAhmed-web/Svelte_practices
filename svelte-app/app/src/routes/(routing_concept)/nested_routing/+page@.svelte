<script lang="js">
  import { goto, afterNavigate, beforeNavigate } from "$app/navigation";

  afterNavigate((navigation) => {
    console.log({ after: navigation });
  });

  beforeNavigate((navigation) => {
    console.log({ before: navigation });
  });
</script>

<a href="/">Home Page</a>
<div class="h-screen w-full">
  <div
    class="grid grid-cols-1 gap-5 justify-items-center content-center h-full"
  >
    <h1 class="text-3xl font-bold flex justify-center items-center">
      Nested Routing
    </h1>
    <a href="nested_routing/page_1">Page 1</a>
    <a href="nested_routing/page_2">Page 2</a>
    <button on:click={() => goto("/nested_routing/page_2")} type="button"
      >click me!</button
    >
  </div>
</div>
