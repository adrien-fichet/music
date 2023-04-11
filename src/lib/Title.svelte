<script lang="ts">
  import type Item from '../item'
  import Icon from '../icon'
  import { beforeUpdate } from 'svelte'
  import trollface from '../assets/trollface.svg'

  export let item: Item

  let stars: number[]
  let icon: string
  let icon_class: string

  beforeUpdate(() => {
    stars = new Array()
    if (item.stars != null) {
      for (let i=0; i < item.stars; i++) {
        stars.push(i)
      }
    }

    icon = Icon.from_genre(item.genre)
    icon_class = Icon.class_from_genre(item.genre)
  })
</script>

{#if item.genre === "meme"}
  <span class="meme"><img src="{trollface}" alt="meme" /></span>
{:else if item.genre != null}
  <span class="{icon_class} {item.genre}">{icon}</span>
{/if}

{item['title']}

{#if item.perso == true}
  [<span class="heart">&hearts;</span>]
{/if}

{#if stars.length > 0}
  [{#each stars as star}<span class="star">★</span>{/each}]
{/if}

{#if item.standard == true}
  <span class="jazz">&sung;</span>
{/if}

{#if item.comment != null}
  <span class="comment">[{item.comment}]</span>
{/if}
