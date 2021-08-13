<script>
  export let label;
  // need to include name,
  // this will be the key in your json
  export let name;
  export let type;
</script>

<label for={name}>{label}</label>
<input id={name} {name} {type} class="outline-none"/>

<style>
  input {
    @apply outline-none;
  }
</style>
