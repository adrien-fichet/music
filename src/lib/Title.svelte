<script lang="ts">
  import { type MusicalPiece } from "../musical-piece";

  interface Props {
    musical_piece: MusicalPiece;
  }

  let { musical_piece }: Props = $props();
</script>

{#if !!musical_piece.genre}
  <span class="{musical_piece.icon_class} {musical_piece.genre}">{musical_piece.icon}</span>
{/if}

{musical_piece["title"]}

{#if !!musical_piece.perso}
  [<span class="heart">♥</span>]
{/if}

{#if musical_piece.stars && musical_piece.stars > 0}
  [<span class="star">{"★".repeat(musical_piece.stars)}</span>]
{/if}

{#if !!musical_piece.standard}♪{/if}

{#if !!musical_piece.single}
  <span class="comment">[Single]</span>
{/if}

{#if !!musical_piece.ep}
  <span class="comment">[EP]</span>
{/if}

{#if !!musical_piece.live && !musical_piece.title.includes("Live")}
  <span class="comment">[Live]</span>
{/if}

{#if !!musical_piece.comment}
  <span class="comment">[{musical_piece.comment}]</span>
{/if}
