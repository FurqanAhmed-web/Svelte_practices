<script>
  export let form;
</script>

<form method="post">
  <p>{form?.message || ''}</p>
  <input
    type="text"
    name="username"
    placeholder="Username"
  />
  <input
    type="text"
    name="password"
    placeholder="Password"
  />
  <button type="submit">Login</button>
</form>
