<script lang="ts">
  import Sources from './lib/Sources.svelte'
  import Todo from './lib/Todo.svelte'
  import NumberOfItems from './lib/NumberOfItems.svelte'
  import RandomItem from './lib/RandomItem.svelte'
  import Filters from './lib/Filters.svelte'
  import NumberOfItemsByDecade from './lib/NumberOfItemsByDecade.svelte'
  import Table from './lib/Table.svelte'
  import { onMount } from 'svelte'

  onMount(async () => {
    let loader = document.querySelector('#loader') as HTMLElement
    loader.style.display = 'none'
  })
</script>

<main>
  <NumberOfItems />
  <RandomItem />
  <p></p>
  <Filters />
  <p></p>
  <Table />
  <Sources />
  <Todo />
  <NumberOfItemsByDecade />
</main>
