<script lang="ts">
  import Title from "./Title.svelte";
  import Artist from "./Artist.svelte";
  import SpotifyLink from "./SpotifyLink.svelte";
  import spotify from "../assets/spotify.svg";
  import { current_items, loading } from "../stores";
</script>

<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Artist</th>
      <th id="year-th">Year</th>
      <th id="spotify-th"><img src={spotify} alt="spotify" class="spotify" /></th>
    </tr>
  </thead>
  <tbody>
    {#if !$loading}
      {#if $current_items.length === 0}
        <tr id="filler">
          <td colspan="4">
            <p>No items found with selected filters...</p>
          </td>
        </tr>
      {:else}
        {#each $current_items as item (item)}
          <tr class={item.tr_class}>
            <td><Title {item} /></td>
            <td><Artist {item} /></td>
            <td class="centered">{item.year}</td>
            <td class="centered"><SpotifyLink {item} /></td>
          </tr>
        {/each}
      {/if}
    {:else}
      <tr id="filler">
        <td colspan="4">
          <div id="loader">
            loading...
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </td>
      </tr>
    {/if}
  </tbody>
</table>
