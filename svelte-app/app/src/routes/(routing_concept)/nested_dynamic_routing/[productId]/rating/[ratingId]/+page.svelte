<script>
  import { page } from "$app/stores";
  const { productId, ratingId } = $page.params;
</script>

<h1 class="text-3xl font-bold flex justify-center items-center h-screen">
  Nested Dynamic Routing Page {productId} Rating {ratingId}
</h1>
