<script lang="ts">
  import { load } from "../../states.svelte";

  interface Props {
    key: "all" | boolean;
    value: "all" | boolean;
  }

  let { key = $bindable(), value }: Props = $props();

  let label = $derived.by(() => {
    let label = "all";
    if (value !== "all") {
      label = value === true ? "yes" : "no";
    }
    return label;
  });
</script>

[<a href="#/" onclick={() => load(() => (key = value))} class={key === value ? "selected" : ""}>{label}</a>]
