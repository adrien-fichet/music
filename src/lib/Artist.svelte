<script lang="ts">
  import flag_fr from '../assets/flag-fr.png'
  import type Item from '../item'

  export let item: Item
</script>

{item['artist']}

{#if item.fr == true}
<img class="flag" src={flag_fr} alt="fr" />
{/if}
