<script lang="ts">
  import Sources from './lib/Sources.svelte'
  import Todo from './lib/Todo.svelte'
  import NumberOfItems from './lib/NumberOfItems.svelte'
  import RandomItem from './lib/RandomItem.svelte'
  import Filters from './lib/Filters.svelte'
  import NumberOfItemsByDecade from './lib/NumberOfItemsByDecade.svelte'
  import Table from './lib/Table.svelte'
  import { items } from './data'
  import type Item from './item'
  import { onMount } from 'svelte'

  let current_items: Item[] = items.filter(item => ("" + item.year).startsWith("202"))

  const items_not_listened_yet: Item[] = items.filter(item => {
    return item.listened == null || item.listened == false
  })

  onMount(async () => {
    document.querySelector("#loader").style.display = "none"
  })
</script>

<main>
  <NumberOfItems items={items} /> 
  <RandomItem {items_not_listened_yet} />
  <Filters 
    bind:current_items={current_items} 
    items={items} />
  <Table bind:current_items={current_items} /> 
  <Sources /> 
  <Todo /> 
  <NumberOfItemsByDecade {items} /> 
</main>
