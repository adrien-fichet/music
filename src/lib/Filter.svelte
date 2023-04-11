<script lang="ts">
  import Icon from '../icon'  
  import trollface from '../assets/trollface.svg'

  export let id: string = ""
  export let onclick
  export let text: string
  export let selected: boolean = false
  export let class_name: string = ""
</script>

[<a 
    href="#/" 
    id={"filter-" + id} 
    on:click={onclick} 
    class={selected ? class_name + " selected" : class_name}
>
{#if id === "genre-meme"}
<span class="meme"><img src={trollface} alt="meme" /> </span>
{:else if id.startsWith("genre-") && !(text.endsWith("all") || text.endsWith("none"))}
<span class="{Icon.class_from_genre(text)} {text}">{Icon.from_genre(text)} </span>
{/if}{text}</a>]
