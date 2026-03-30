<script lang="ts">
  import { data } from "../data";
  import { percentage } from "../percentage";

  const number_of_listened_musical_pieces: number = data.filter(
    (musical_piece) => musical_piece.listened == true
  ).length;
  const musical_pieces_length: number = data.length;
  const percent: number = percentage(number_of_listened_musical_pieces, musical_pieces_length, 2);
</script>

<p>
  <b>Number of musical pieces</b>: {number_of_listened_musical_pieces} listened out of {musical_pieces_length} in total ({percent}%)
</p>
