<script>
  import AddArticle from "$lib/components/AddArticle.svelte";
  import Login from "$lib/components/Login.svelte";
  import { searchTerm, usr } from "$lib/userStore";

  import "../app.postcss";
</script>

<!-- markup (zero or more items) goes here -->

<header class="p-4 shadow-md">
  <ul>
    <li><a href="/">หน้าแรก</a></li>
    <li>
      <input
        type="search"
        name="q"
        id="q"
        bind:value={$searchTerm}
        class="shadow-md outline-none"
        placeholder="ค้นหา  "
      />
    </li>
    <li><a href="/articles">articles</a></li>
    <li>
      {#if $usr}
        {$usr["username"]}
        <button on:click={() => ($usr = "")}>ออกจากระบบ</button>
      {/if}
    </li>
  </ul>
</header>

<div class="pt-4">
  {#if $usr}
    <AddArticle on:create />
    <slot><!-- optional fallback --></slot>
  {:else}
    <Login />
  {/if}
</div>

<style>
  /* your styles go here */
</style>
