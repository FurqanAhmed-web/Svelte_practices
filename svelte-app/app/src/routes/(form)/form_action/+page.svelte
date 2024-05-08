<script>
  let username = "";
  let password = "";
  let message = "";

  const handlesubmit = async () => {
     const response = await fetch("/form_action", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    message = data.message;
  };
</script>

<form on:submit|preventDefault={handlesubmit}>
  <p>{message}</p>
  <input
    type="text"
    name="username"
    bind:value={username}
    placeholder="Username"
  />
  <input
    type="text"
    name="password"
    bind:value={password}
    placeholder="Password"
  />
  <button type="submit">Login</button>
</form>
