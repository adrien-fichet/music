<script lang="ts">
  import Title from './Title.svelte'
  import Artist from './Artist.svelte'
  import SpotifyLink from './SpotifyLink.svelte'
  import spotify from '../assets/spotify.svg'
  import { current_items } from '../stores'
</script>

<table>
  <tr>
    <th>Title</th>
    <th>Artist</th>
    <th>Year</th>
    <th><img src="{spotify}" alt="spotify" class="spotify" /></th></tr>
  {#each $current_items as item}
    <tr class="{item.tr_class}">
      <td><Title {item} /></td>
      <td><Artist {item} /></td>
      <td>{item.year}</td>
      <td><SpotifyLink {item} /></td>
    </tr>
  {/each}
</table>
