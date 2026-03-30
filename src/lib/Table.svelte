<script lang="ts">
  import Title from "./Title.svelte";
  import Artist from "./Artist.svelte";
  import SpotifyLink from "./SpotifyLink.svelte";
  import spotify from "../assets/svg/spotify.svg";
  import { filters, loading } from "../states.svelte";
  import { data } from "../data";

  const filtered_musical_pieces = $derived.by(() => {
    return data.filter((musical_piece) => {
      if (filters.value.listened !== "all") {
        if (filters.value.listened !== !!musical_piece.listened) {
          return false;
        }
      }

      if (filters.value.stars !== "all") {
        if (filters.value.stars === 0) {
          if (musical_piece.stars && musical_piece.stars !== 0) {
            return false;
          }
        } else if (filters.value.stars !== musical_piece.stars) {
          return false;
        }
      }

      if (filters.value.fav !== "all") {
        if (filters.value.fav !== !!musical_piece.fav) {
          return false;
        }
      }

      if (filters.value.meh !== "all") {
        if (filters.value.meh !== !!musical_piece.meh) {
          return false;
        }
      }

      if (filters.value.perso !== "all") {
        if (filters.value.perso !== !!musical_piece.perso) {
          return false;
        }
      }

      if (filters.value.fr !== "all") {
        if (filters.value.fr !== !!musical_piece.fr) {
          return false;
        }
      }

      if (filters.value.standard !== "all") {
        if (filters.value.standard !== !!musical_piece.standard) {
          return false;
        }
      }

      if (filters.value.live !== "all") {
        if (filters.value.live !== !!musical_piece.live) {
          return false;
        }
      }

      if (filters.value.genre !== "all") {
        if (filters.value.genre !== false && !musical_piece.genre) {
          return false;
        } else if (musical_piece.genre && filters.value.genre !== musical_piece.genre) {
          return false;
        }
      }

      if (filters.value.decade !== "all") {
        if (filters.value.decade === "< 1950" && musical_piece.year >= 1950) {
          return false;
        } else {
          const decade = filters.value.decade as number;
          if (musical_piece.year < decade || musical_piece.year >= decade + 10) {
            return false;
          }
        }
      }

      return true;
    });
  });
</script>

<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Artist</th>
      <th id="year-th">Year</th>
      <th id="spotify-th"><img src={spotify} alt="spotify" class="spotify" /></th>
    </tr>
  </thead>
  <tbody>
    {#if !loading.value}
      {#if filtered_musical_pieces.length === 0}
        <tr id="filler">
          <td colspan="4">
            <p>No musical pieces found with selected filters...</p>
          </td>
        </tr>
      {:else}
        {#each filtered_musical_pieces as musical_piece (musical_piece)}
          <tr class={musical_piece.tr_class}>
            <td><Title {musical_piece} /></td>
            <td><Artist name={musical_piece.artist} fr={musical_piece.fr} /></td>
            <td class="centered">{musical_piece.year}</td>
            <td class="centered"><SpotifyLink spotify_url={musical_piece.spotify_url} /></td>
          </tr>
        {/each}
      {/if}
    {:else}
      <tr id="filler">
        <td colspan="4">
          <div id="loader">
            loading...
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </td>
      </tr>
    {/if}
  </tbody>
</table>
