<script lang="ts">
  import Title from "./Title.svelte";
  import Artist from "./Artist.svelte";
  import SpotifyLink from "./SpotifyLink.svelte";
  import spotify from "../assets/svg/spotify.svg";
  import { filters, loading } from "../states.svelte";
  import { data } from "../data";

  const filtered_items = $derived.by(() => {
    return data.filter((item) => {
      if (filters.value.listened !== "all") {
        if (filters.value.listened !== !!item.listened) {
          return false;
        }
      }

      if (filters.value.stars !== "all") {
        if (filters.value.stars === 0) {
          if (item.stars && item.stars !== 0) {
            return false;
          }
        } else if (filters.value.stars !== item.stars) {
          return false;
        }
      }

      if (filters.value.fav !== "all") {
        if (filters.value.fav !== !!item.fav) {
          return false;
        }
      }

      if (filters.value.meh !== "all") {
        if (filters.value.meh !== !!item.meh) {
          return false;
        }
      }

      if (filters.value.perso !== "all") {
        if (filters.value.perso !== !!item.perso) {
          return false;
        }
      }

      if (filters.value.fr !== "all") {
        if (filters.value.fr !== !!item.fr) {
          return false;
        }
      }

      if (filters.value.standard !== "all") {
        if (filters.value.standard !== !!item.standard) {
          return false;
        }
      }

      if (filters.value.live !== "all") {
        if (filters.value.live !== !!item.live) {
          return false;
        }
      }

      if (filters.value.genre !== "all") {
        if (filters.value.genre !== false && !item.genre) {
          return false;
        } else if (item.genre && filters.value.genre !== item.genre) {
          return false;
        }
      }

      if (filters.value.decade !== "all") {
        if (filters.value.decade === "< 1950" && item.year >= 1950) {
          return false;
        } else {
          const decade = filters.value.decade as number;
          if (item.year < decade || item.year >= decade + 10) {
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
      <th id="spotify-th"><img src={spotify} alt="spotify" class="spotify"></th>
    </tr>
  </thead>
  <tbody>
    {#if !loading.value}
      {#if filtered_items.length === 0}
        <tr id="filler">
          <td colspan="4">
            <p>No items found with selected filters...</p>
          </td>
        </tr>
      {:else}
        {#each filtered_items as item (item)}
          <tr class={item.tr_class}>
            <td><Title {item} /></td>
            <td><Artist name={item.artist} fr={item.fr} /></td>
            <td class="centered">{item.year}</td>
            <td class="centered"><SpotifyLink spotify_url={item.spotify_url} /></td>
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
