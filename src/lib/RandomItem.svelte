<script lang="ts">
  import SpotifyLink from './SpotifyLink.svelte'
  import type Item from '../item'
  import { items } from '../stores'

  let item: Item

  function get_random_item() {
    let items_not_listened_yet = $items.filter(item => !item.listened)
    item = items_not_listened_yet[Math.floor(Math.random() * items_not_listened_yet.length)]
  }

  get_random_item()
</script>

{#if !!item}
<p>
  <a href="#/" on:click={get_random_item}>One random item (not yet listened)</a>:
  "{item.title}" - {item.artist} ({item.year}) <SpotifyLink {item} />
</p>
{/if}
