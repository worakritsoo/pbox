<script>
  // your script goes here
  let username, password, user;
  async function login(ev) {
    console.log(ev);
    const res = await fetch(
      `https://dmsxupload.pea.co.th/tests3/api/password/get?username=${username}&password=${password}`
    );
    const data = await res.json();
    console.log(data);
    const [L, fname, lastname, ...profile] = data.split(",");
    if (fname && lastname) {
      user = { username, fname, lastname, profile };
      console.log(user);
    }
  }
</script>

<form on:submit|preventDefault={login}>
  <input
    type="text"
    name="username"
    id="username"
    placeholder="username"
    bind:value={username}
  />
  <input
    type="password"
    name="password"
    id="password"
    placeholder="password"
    bind:value={password}
  />
  <input class="cursor-pointer" type="submit" name="submit" value="login" />
</form>

<style>
  /* your styles go here */
</style>
