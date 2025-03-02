<script lang="ts">
  import SpotifyLink from "./SpotifyLink.svelte";
  import { type Item } from "../item";
  import { data } from "../data";

  let item: Item | undefined = $state();

  function get_random_item() {
    const items_not_listened_yet = data.filter((item) => !item.listened);
    item = items_not_listened_yet[Math.floor(Math.random() * items_not_listened_yet.length)];
  }

  get_random_item();
</script>

{#if !!item}
  <p>
    <a href="#/" onclick={get_random_item}><b>One random item</b> (not yet listened)</a>:
    <a target="_blank" href={item.spotify_url}>"{item.title}" - {item.artist} ({item.year})</a>
    <SpotifyLink {item} />
  </p>
{/if}
