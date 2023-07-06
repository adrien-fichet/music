<script lang="ts">
  import { items } from '../stores'

  let items_by_decade = {}

  for (const item of $items) {
    let decade = Math.floor(item.year / 10) * 10
    let listened = !!item.listened

    if (decade >= 1950) {
      if (items_by_decade[decade] === undefined) {
        items_by_decade[decade] = { listened: listened ? 1 : 0, total: 1 }
      } else {
        items_by_decade[decade].listened += listened ? 1 : 0
        items_by_decade[decade].total += 1
      }
    }
  }
</script>

<p>Number of items listened by decade:</p>
<table>
  <tr><th>Decade</th><th>Listened</th><th>Not listened</th><th>Total</th><th>Percentage</th></tr>
  {#each Object.entries(items_by_decade) as [decade, number_of_items]}
    <tr>
      <td>{ decade }s</td>
      <td>{ number_of_items["listened"] }</td>
      <td>{ number_of_items["total"] - number_of_items["listened"] }</td>
      <td>{ number_of_items["total"] }</td>
      <td>{ Math.floor(number_of_items["listened"] / number_of_items["total"] * 100) }%</td>
    </tr>
  {/each}
</table>
<p></p>
