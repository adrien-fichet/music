<script lang="ts">
  import { filters, load } from "../../states.svelte";
  import { Icon } from "../../icon";
  import type { Genre } from "../../genre";

  interface Props {
    genre: Genre;
  }

  let { genre }: Props = $props();
</script>

[<span class="{genre} {Icon.class_from_genre(genre)}">{Icon.from_genre(genre)}</span>
<a
  href="#/"
  onclick={() => load(() => (filters.value.genre = genre))}
  class={filters.value.genre === genre ? "selected" : ""}>{genre}</a
>]
