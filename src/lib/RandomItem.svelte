<script lang="ts">
  import SpotifyLink from "./SpotifyLink.svelte"
  import type Item from "../item"

  export let items_not_listened_yet: Object[]

  let item: Item

  function get_random_item() {
    item = items_not_listened_yet[Math.floor(Math.random() * items_not_listened_yet.length)]
  }

  get_random_item()
</script>

{#if items_not_listened_yet.length > 0}
<p>
  <a href="#/" on:click={get_random_item}>One random item (not yet listened)</a>:
  "{item.title}" - {item.artist} ({item.year}) <SpotifyLink {item} />
</p>
{/if}
