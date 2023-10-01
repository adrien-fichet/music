<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements'
  import { Icon } from '../icon'

  export let id = ''
  export let onclick: MouseEventHandler<HTMLAnchorElement>
  export let text: string
  export let selected = false
  export let class_name = ''
</script>

[{#if id.startsWith('genre-') && !(text.endsWith('all') || text.endsWith('none'))}
<span class="{Icon.class_from_genre(text)} {text}">{Icon.from_genre(text)} </span>
{/if}<a
    href="#/"
    id={"filter-" + id}
    on:click={onclick}
    class={selected ? class_name + ' selected' : class_name}
>{text}</a>]
