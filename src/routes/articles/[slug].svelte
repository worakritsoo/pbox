<script context="module">
  export async function load({ fetch, page }) {
    const res = await fetch("/articles/" + page.params.slug + ".json");
    return { props: { article: await res.json() } };
  }
</script>

<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  import { usr } from "$lib/userStore";

  export let article = {};
  console.log(article);
  // your script goes here

  async function update() {
    const res = await fetch("/articles/" + $page.params.slug + ".json", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    });
    const data = await res.json();
    console.log(data);
  }

  async function remove() {
    const res = await fetch("/articles/" + $page.params.slug + ".json", {
      method: "DELETE",
    });
    const data = await res.json();
    goto("/articles");
    console.log(data);
  }

  let editable = false;
  if (article.author == $usr["username"]) {
    editable = true;
  }
</script>

<!-- markup (zero or more items) goes here -->

<article class="m-4 h-full">
  <header class="flex justify-between">
    <h1>
      <a href={article.url}>{article.url}</a>
    </h1>
    {#if article.author == $usr["username"]}
      <div class="box">
        <button on:click={remove} class="btn">Remove</button>
        <button on:click={update} class="btn">Update</button>
      </div>
    {/if}
  </header>
  <input type="text" bind:value={article.title} class="outline-none w-full" />
  <div class="prose prose-md">
    <content
      contenteditable="true"
      bind:innerHTML={article.content}
      class="outline-none"
    >
      {article.content}
    </content>
  </div>
</article>

<style>
  /* your styles go here */
</style>
