<script lang="ts">
  import Sources from "./lib/Sources.svelte";
  import Todo from "./lib/Todo.svelte";
  import NumberOfMusicalPieces from "./lib/NumberOfMusicalPieces.svelte";
  import RandomMusicalPiece from "./lib/RandomMusicalPiece.svelte";
  import Filters from "./lib/filters/Filters.svelte";
  import NumberOfMusicalPiecesByDecade from "./lib/NumberOfMusicalPiecesByDecade.svelte";
  import Table from "./lib/Table.svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    const loader = document.querySelector("#loader") as HTMLElement;
    loader.style.display = "none";
  });
</script>

<main>
  <NumberOfMusicalPieces />
  <RandomMusicalPiece />
  <p></p>
  <Filters />
  <p></p>
  <Table />
  <Sources />
  <Todo />
  <NumberOfMusicalPiecesByDecade />
</main>
