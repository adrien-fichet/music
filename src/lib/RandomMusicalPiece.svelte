<script lang="ts">
  import SpotifyLink from "./SpotifyLink.svelte";
  import { type MusicalPiece } from "../musical-piece";
  import { data } from "../data";

  function get_random_musical_piece(): MusicalPiece {
    const musical_pieces_not_listened_yet = data.filter((musical_piece) => !musical_piece.listened);
    return musical_pieces_not_listened_yet[Math.floor(Math.random() * musical_pieces_not_listened_yet.length)];
  }

  let musical_piece: MusicalPiece = get_random_musical_piece();
</script>

{#if !!musical_piece}
  <p>
    <a href="#/" onclick={() => (musical_piece = get_random_musical_piece())}
      ><b>One random musical piece</b> (not yet listened)</a
    >:
    <a target="_blank" href={musical_piece.spotify_url}
      >"{musical_piece.title}" - {musical_piece.artist} ({musical_piece.year})</a
    >
    <SpotifyLink spotify_url={musical_piece.spotify_url} />
  </p>
{/if}
