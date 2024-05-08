<script>
  import "./app.css";
  import { page } from "$app/stores";
  export let data;
  const { admin } = data;
  const notify = $page.data.notification;
</script>

<h1 class="text-3xl font-bold flex justify-center items-center">Svelte App</h1>
<h2 class="text-1xl font-bold flex justify-center items-center">
  {admin} Account
</h2>
<slot />
