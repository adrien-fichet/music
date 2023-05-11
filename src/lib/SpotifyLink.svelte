<script lang="ts">
  import spotify from '../assets/spotify.svg'
  import type Item from '../item'

  export let item: Item
</script>

<a href="{item.spotify_url}" target="_blank">
  <img src="{spotify}" alt="spotify" class="spotify" />
</a>
