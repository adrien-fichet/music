<script lang="ts">
  import Title from "./Title.svelte";
  import Artist from "./Artist.svelte";
  import SpotifyLink from "./SpotifyLink.svelte";
  import spotify from "../assets/spotify.svg";
  import { filters, loading } from "../states.svelte";
  import { data } from "../data";

  const filtered_items = $derived.by(() => {
    return data.filter((item) => {
      for (const [key, value] of Object.entries(filters.value)) {
        let display_item = true;

        if (key === "year") {
          if (value === "lt-1950") {
            display_item = item[key] < 1950;
          } else {
            display_item = ("" + item[key]).startsWith("" + (value as string).slice(0, 3));
          }
        } else if (!value) {
          display_item = !item[key as keyof typeof item];
        } else {
          display_item = item[key as keyof typeof item] === value;
        }

        if (display_item === false) {
          return false;
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
            <td><Artist {item} /></td>
            <td class="centered">{item.year}</td>
            <td class="centered"><SpotifyLink {item} /></td>
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
