<script lang="ts">
  import type Item from '../item'
  import trollface from '../assets/trollface.svg'

  export let item: Item
</script>

{#if item.genre === 'meme'}
  <span class="meme"><img src="{trollface}" alt="meme" /></span>
{:else if item.genre != null}
  <span class="{item.icon_class} {item.genre}">{item.icon}</span>
{/if}

{item['title']}

{#if !!item.perso}
  [<span class="heart">♥</span>]
{/if}

{#if item.stars > 0}
[{#each {length: item.stars} as _}<span class="star">★</span>{/each}]
{/if}

{#if item.standard == true}
  <span class="jazz">♪</span>
{/if}

{#if !!item.comment}
  <span class="comment">[{item.comment}]</span>
{/if}
