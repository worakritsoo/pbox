<script context="module">
  const API = import.meta.env.VITE_API;
  export async function load({ fetch }) {
    const res = await fetch("/api/posts");
    return { props: { posts: await res.json() } };
  }
</script>

<script>
  import AddPost from "$lib/components/AddPost.svelte";
  import { searchTerm } from "$lib/userStore";

  export let posts = [];
  console.log(posts.length);
  import Fuse from "fuse.js";
  import { createEventDispatcher } from "svelte";
  const fuse = new Fuse(posts, {
    keys: ["title", "content"],
  });
  let q = "";
  $: filterSearch = $searchTerm
    ? fuse.search($searchTerm).map((x) => x.item)
    : posts;

</script>

{#each filterSearch as item}
  <div
    class="p-6 m-4 shadow-md hover:shadow-xl  transition-transform hover:-translate-y-2"
  >
    <a href={item.url}>
      {item.title}
    </a>
    <p>{item.content}</p>
    <a href="/articles/{item._id}">Blog</a>
  </div>
{/each}
