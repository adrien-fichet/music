<script lang="ts">
  import { data } from "../data";
  import { percentage, percentage_class } from "../percentage";

  type ItemsByDecade = { [decade: number]: { listened: number; total: number } };
  const items_by_decade = $state({} as ItemsByDecade);

  for (const item of data) {
    const decade = Math.floor(item.year / 10) * 10;
    const listened = !!item.listened;

    if (decade >= 1950) {
      if (items_by_decade[decade] === undefined) {
        items_by_decade[decade] = { listened: listened ? 1 : 0, total: 1 };
      } else {
        items_by_decade[decade].listened += listened ? 1 : 0;
        items_by_decade[decade].total += 1;
      }
    }
  }
</script>

<table>
  <thead>
    <tr><th>Decade</th><th>✓</th><th>✗</th><th>Total</th><th>%</th></tr>
  </thead>
  <tbody>
    {#each Object.entries(items_by_decade) as [decade, number_of_items] (decade)}
      <tr>
        <td class="centered">{decade}s</td>
        <td class="align-right">{number_of_items["listened"]}</td>
        <td class="align-right">{number_of_items["total"] - number_of_items["listened"]}</td>
        <td class="align-right">{number_of_items["total"]}</td>
        <td class={`centered ${percentage_class(number_of_items["listened"], number_of_items["total"])}`}>
          {percentage(number_of_items["listened"], number_of_items["total"])}%
        </td>
      </tr>
    {/each}
  </tbody>
</table>
<p></p>
