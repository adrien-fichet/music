<script lang="ts">
  import { data } from "../data";
  import { percentage, percentage_class } from "../percentage";

  type MusicalPiecesByDecade = { [decade: number]: { listened: number; total: number } };
  const musical_pieces_by_decade = {} as MusicalPiecesByDecade;

  for (const musical_piece of data) {
    const decade = Math.floor(musical_piece.year / 10) * 10;
    const listened = !!musical_piece.listened;

    if (decade >= 1950) {
      if (musical_pieces_by_decade[decade] === undefined) {
        musical_pieces_by_decade[decade] = { listened: listened ? 1 : 0, total: 1 };
      } else {
        musical_pieces_by_decade[decade].listened += listened ? 1 : 0;
        musical_pieces_by_decade[decade].total += 1;
      }
    }
  }
</script>

<table>
  <thead>
    <tr><th>Decade</th><th>✓</th><th>✗</th><th>Total</th><th>%</th></tr>
  </thead>
  <tbody>
    {#each Object.entries(musical_pieces_by_decade) as [decade, number_of_musical_pieces] (decade)}
      <tr>
        <td class="centered">{decade}s</td>
        <td class="align-right">{number_of_musical_pieces.listened}</td>
        <td class="align-right">{number_of_musical_pieces.total - number_of_musical_pieces.listened}</td>
        <td class="align-right">{number_of_musical_pieces.total}</td>
        <td class={`centered ${percentage_class(number_of_musical_pieces.listened, number_of_musical_pieces.total)}`}>
          {percentage(number_of_musical_pieces.listened, number_of_musical_pieces.total)}%
        </td>
      </tr>
    {/each}
  </tbody>
</table>
<p></p>
