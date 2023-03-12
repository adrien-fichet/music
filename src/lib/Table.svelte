<script lang="ts">
  import Title from './Title.svelte'
  import Artist from './Artist.svelte'
  import type Item from '../item'

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
  <tr><th>Title</th><th>Artist</th><th>Year</th></tr>
  {#each current_items as item}
    <tr class="{get_tr_class(item)}">
      <td><Title {item} /></td>
      <td><Artist {item} /></td>
      <td>{item['year']}</td>
    </tr>
  {/each}
</table>
