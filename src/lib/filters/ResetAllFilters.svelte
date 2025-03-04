<script lang="ts">
  import { filters, load } from "../../states.svelte";

  function reset_filters() {
    load(() => {
      filters.value = {
        listened: "all",
        stars: "all",
        fav: "all",
        meh: "all",
        perso: "all",
        fr: "all",
        standard: "all",
        live: "all",
        genre: "all",
        decade: "all"
      };
    });
  }
</script>

[<a href="#/" onclick={reset_filters}>Reset all</a>]
