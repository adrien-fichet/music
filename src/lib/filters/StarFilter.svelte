<script lang="ts">
  import { filters, load } from "../../states.svelte";

  interface Props {
    stars: number;
  }

  let { stars }: Props = $props();
</script>

[<a
  href="#/"
  onclick={() => load(() => (filters.value.stars = stars))}
  class="star {filters.value.stars === stars ? 'selected' : ''}">{"★".repeat(stars)}</a
>]
