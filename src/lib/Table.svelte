<script lang="ts">
  import Title from './Title.svelte'
  import Artist from './Artist.svelte'
  import SpotifyLink from './SpotifyLink.svelte'
  import type Item from '../item'
  import spotify from '../assets/spotify.svg'

  export let current_items: Item[]

  function get_tr_class(item: Item) {
    if (item.listened == true) {
      if (item.fav == true) {
        return "fav"
      } else if (item.meh == true) {
        return "meh"
      }
    } else {
      return "not-listened"
    }
  }
</script>

<table>
  <tr>
    <th>Title</th>
    <th>Artist</th>
    <th>Year</th>
    <th><img src="{spotify}" alt="spotify" class="spotify" /></th></tr>
  {#each current_items as item}
    <tr class="{get_tr_class(item)}">
      <td><Title {item} /></td>
      <td><Artist {item} /></td>
      <td>{item['year']}</td>
      <td><SpotifyLink {item} /></td>
    </tr>
  {/each}
</table>
