<script lang="ts">
  import type Item from '../item'

  export let items: Item[]

  let items_by_decade = {}
  items.forEach(item => {
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
  {#each Object.entries(items_by_decade) as [key, value]}
    <li>{key}s: {value}</li>
  {/each}
</ul>
