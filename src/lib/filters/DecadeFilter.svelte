<script lang="ts">
  import { filters, load } from "../../states.svelte";
  import { type Decade } from "../../decade";

  interface Props {
    decade: Decade | "all";
  }

  let { decade }: Props = $props();
</script>

[<a
  href="#/"
  onclick={() => load(() => (filters.value.decade = decade))}
  class={filters.value.decade === decade ? "selected" : ""}
  >{decade}{decade !== "all" && decade !== "< 1950" ? "s" : ""}</a
>]
