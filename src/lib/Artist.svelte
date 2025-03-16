<script lang="ts">
  import flag_fr from "../assets/svg/flag-fr.svg";

  interface Props {
    name: string;
    fr?: boolean;
  }

  let { name, fr }: Props = $props();
</script>

{name}

{#if fr}
  <img class="flag" src={flag_fr} alt="fr">
{/if}
