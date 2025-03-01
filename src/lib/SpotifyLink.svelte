<script lang="ts">
  import spotify from "../assets/spotify.svg";
  import { type Item } from "../item";

  interface Props {
    item: Item;
  }

  let { item }: Props = $props();
</script>

<a href={item.spotify_url} target="_blank">
  <img src={spotify} alt="spotify" class="spotify" />
</a>
