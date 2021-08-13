<script>
  import { page } from "$app/stores";

  import { searchTerm, usr } from "$lib/userStore";
</script>

<svelte:head>
  <script
    type="module"
    src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"
  />
</svelte:head>
<body>
  <ion-split-pane content-id="main" when="md">
    <ion-menu side="start" content-id="main" style="--side-width:140px;">
      <ion-header translucent={true}>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen={true}>
        <ion-list>
          <a href="/">
            <ion-item>
              <ion-icon name="home" slot="start" />
              <ion-label>Home</ion-label>
            </ion-item>
          </a>
          <a href="/profile">
            <ion-item>
              <ion-icon name="person" slot="start" />
              <ion-label>Profile</ion-label>
            </ion-item>
          </a>
          <a href="/articles">
            <ion-item>
              <ion-icon name="cube" slot="start" />
              <ion-label>Blogs</ion-label>
            </ion-item>
          </a>
        </ion-list>
      </ion-content>
    </ion-menu>

    <div class="ion-page" id="main">
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>
            {$page.path.split("/")[0]}
            <ion-searchbar
              placeholder="Filter Search"
              inputmode="search"
              type="search"
              on:input={(ev) => ($searchTerm = ev.target.value)}
              debounce="250"
              show-cancel-button="focus"
            />
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <slot><!-- optional fallback --></slot>
      </ion-content>
    </div>
  </ion-split-pane>
</body>
