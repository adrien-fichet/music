<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import { Icon } from "../icon";

  interface Props {
    id: string;
    onclick: MouseEventHandler<HTMLAnchorElement>;
    text: string;
    selected?: boolean;
    class_name?: string;
  }

  let { id, onclick, text, selected = false, class_name = "" }: Props = $props();
</script>

[{#if id.startsWith("genre-") && !(text.endsWith("all") || text.endsWith("none"))}
  <span class="{Icon.class_from_genre(text)} {text}">{Icon.from_genre(text)} </span>
{/if}<a href="#/" id={"filter-" + id} {onclick} class={selected ? class_name + " selected" : class_name}>{text}</a>]
