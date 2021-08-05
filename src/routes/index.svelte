<script context="module">
  const API = import.meta.env.VITE_API;
  export async function load({ fetch }) {
    const res = await fetch(API + "/posts");
    return { props: { posts: await res.json() } };
  }
</script>

<script>
  export let posts = [];
  console.log(posts.length);
  import Fuse from "fuse.js";
  const fuse = new Fuse(posts, {
    keys: ["title", "content"],
  });
  let q = "";
  $: filterSearch = q ? fuse.search(q).map((x) => x.item) : posts;
</script>

<input type="search" placeholder="ค้นหา" bind:value={q} />
{#each filterSearch as item}
  <div class="p-4 shadow-md m-2">
    {item.title}
  </div>
{/each}

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
