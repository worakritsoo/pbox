<script>
import { usr } from "$lib/userStore";

  import "../app.postcss";
</script>

<header class="p-4 shadow-md">
  <nav>
    <ul>
      <li><a href="/">หน้าแรก</a></li>
      <li><a href="/articles">บล็อก</a></li>
      <li><a href="/">ผู้ใช้</a></li>
    </ul>
  </nav>
</header>

{#if $usr}
  <slot />
{/if}
