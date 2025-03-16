<script lang="ts">
  import spotify from "../assets/svg/spotify.svg";

  interface Props {
    spotify_url?: string;
  }

  let { spotify_url }: Props = $props();
</script>

<a href={spotify_url} target="_blank">
  <img src={spotify} alt="spotify" class="spotify" />
</a>
