<script lang="ts">
  import spotify from '../assets/spotify.svg'
  import type Item from '../item'
  import { beforeUpdate } from 'svelte'

  export let item: Item
  let spotify_url: string

  beforeUpdate(() => {
    spotify_url = `http://open.spotify.com/search/${item.title} - ${item.artist}`
  })
</script>

<a href="{spotify_url}" target="_blank">
  <img src="{spotify}" alt="spotify" class="spotify" />
</a>
