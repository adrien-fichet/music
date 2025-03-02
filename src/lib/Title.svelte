<script lang="ts">
  import { type Item } from "../item";

  interface Props {
    item: Item;
  }

  let { item }: Props = $props();
</script>

{#if !!item.genre}
  <span class="{item.icon_class} {item.genre}">{item.icon}</span>
{/if}

{item["title"]}

{#if !!item.perso}
  [<span class="heart">♥</span>]
{/if}

{#if item.stars && item.stars > 0}
  [{#each { length: item.stars }}<span class="star">★</span>{/each}]
{/if}

{#if !!item.standard}♪{/if}

{#if !!item.single}
  <span class="comment">[Single]</span>
{/if}

{#if !!item.ep}
  <span class="comment">[EP]</span>
{/if}

{#if !!item.live && !item.title.includes("Live")}
  <span class="comment">[Live]</span>
{/if}

{#if !!item.comment}
  <span class="comment">[{item.comment}]</span>
{/if}
