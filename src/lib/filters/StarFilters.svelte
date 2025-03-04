<script lang="ts">
  import { filters, load } from "../../states.svelte";
  import StarFilter from "./StarFilter.svelte";
</script>

Stars: [<a
  href="#/"
  onclick={() => load(() => (filters.value.stars = "all"))}
  class={filters.value.stars === "all" ? "selected" : ""}>all</a
>] [<a
  href="#/"
  onclick={() => load(() => (filters.value.stars = 0))}
  class={filters.value.stars === 0 ? "selected" : ""}>none</a
>]
{#each [1, 2, 3, 4] as stars (stars)}
  <StarFilter {stars} />
{/each}
