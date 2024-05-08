<script>
  export let form;
</script>

<form method="post" action="?/login">
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
  <button formaction="?/register">Register</button>
</form>
