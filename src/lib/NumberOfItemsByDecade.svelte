<script lang="ts">
  import { items } from '../stores'

  let items_by_decade = {}

  $items.forEach(item => {
    let decade = Math.floor(item.year / 10) * 10
    if (decade >= 1950) {
      if (items_by_decade[decade] == null) {
        items_by_decade[decade] = 1
      } else {
        items_by_decade[decade] += 1
      }
    }
  })
</script>

<p>Number of items by decade:</p>
<ul>
  {#each Object.entries(items_by_decade) as [decade, number_of_items]}
    <li>{decade}s: {number_of_items}</li>
  {/each}
</ul>
