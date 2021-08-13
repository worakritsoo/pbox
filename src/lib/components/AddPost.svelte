<script>
  import Input from "./Input.svelte";

  let json = {};

  function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    json = Object.fromEntries(formData.entries());
  }
</script>

<div class="shadow-md">
  <form on:submit={submit}>
    <Input label="Username" name="username" type="text" />
    <Input label="Password" name="password" type="password" />
    <Input label="Email" name="email" type="email" />
    <button>Submit</button>
  </form>
</div>

<pre>
	{JSON.stringify(json, null, 2)}
</pre>
