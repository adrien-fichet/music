<script lang="ts">
  import { filters, load } from "../../states.svelte";
  import GenreFilter from "./GenreFilter.svelte";
</script>

<fieldset>
  <legend>
    <b>Genres</b>
    [<a
      href="#/"
      onclick={() => load(() => (filters.value.genre = "all"))}
      class={filters.value.genre === "all" ? "selected" : ""}>all</a
    >] [<a
      href="#/"
      onclick={() => load(() => (filters.value.genre = false))}
      class={filters.value.genre === false ? "selected" : ""}>none</a
    >]
  </legend>
  <GenreFilter genre="rock" />
  <GenreFilter genre="hard-rock" />
  <GenreFilter genre="rock-n-roll" />
  <br />
  <GenreFilter genre="punk" />
  <GenreFilter genre="synth" />
  <GenreFilter genre="metal" />
  <GenreFilter genre="country" />
  <br />
  <GenreFilter genre="soul" />
  <GenreFilter genre="trip-hop" />
  <GenreFilter genre="pop" />
  <GenreFilter genre="funk" />
  <GenreFilter genre="grunge" />
  <br />
  <GenreFilter genre="jazz" />
  <GenreFilter genre="disco" />
  <GenreFilter genre="reggae" />
  <GenreFilter genre="r-n-b" />
  <br />
  <GenreFilter genre="world" />
  <GenreFilter genre="classical" />
  <GenreFilter genre="fusion" />
  <GenreFilter genre="blues" />
  <br />
  <GenreFilter genre="folk" />
  <GenreFilter genre="electro" />
  <GenreFilter genre="rap" />
  <GenreFilter genre="chanson" />
  <GenreFilter genre="lofi" />
  <br />
  <GenreFilter genre="piano" />
  <GenreFilter genre="meme" />
  <GenreFilter genre="new-wave" />
  <GenreFilter genre="vgm" />
</fieldset>
