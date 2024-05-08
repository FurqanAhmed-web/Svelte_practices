<script>
  import { invalidate } from "$app/navigation";
  export let data;
  const { title, user, admin } = data;

  function refresh() {
    invalidate("https://dummyjson.com/users");
  }
</script>

<h4>Data for {admin}</h4>
<h2>{title}</h2>
<h4>{user.firstName}</h4>
<h4>{user.lastName}</h4>
<h4>{user.age}</h4>
<h4>{user.address.address}</h4>
<h4>{user.height}</h4>
<h4>{user.weight}</h4>
<img class="h-10 w-10" src={user.image} alt="" />

<button on:click={refresh}>Refresh Data</button>
