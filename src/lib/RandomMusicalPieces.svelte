<script lang="ts">
  import SpotifyLink from "./SpotifyLink.svelte";
  import { type MusicalPiece } from "../musical-piece";
  import { data } from "../data";

  function get_random_musical_pieces(): MusicalPiece[] {
    const musical_pieces_not_listened_yet = data.filter((musical_piece) => !musical_piece.listened);
    let random_musical_pieces = [];
    for (let i = 0; i < 5; i++) {
      random_musical_pieces[i] =
        musical_pieces_not_listened_yet[Math.floor(Math.random() * musical_pieces_not_listened_yet.length)];
    }
    return random_musical_pieces;
  }

  let random_musical_pieces: MusicalPiece[] = get_random_musical_pieces();
</script>

{#if !!random_musical_pieces}
  <p>
    <a href="#/" onclick={() => (random_musical_pieces = get_random_musical_pieces())}>
      <b>5 random musical pieces</b> (not yet listened)
    </a>:
  </p>
  <ul>
    {#each random_musical_pieces as random_musical_piece (random_musical_piece)}
      <li>
        <a target="_blank" href={random_musical_piece.spotify_url}
          >"{random_musical_piece.title}" - {random_musical_piece.artist} ({random_musical_piece.year})</a
        >
        <SpotifyLink spotify_url={random_musical_piece.spotify_url} />
      </li>
    {/each}
  </ul>
{/if}
