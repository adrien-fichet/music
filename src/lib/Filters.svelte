<script lang="ts">
  import flag_fr from '../assets/flag-fr.png'
  import type Item from '../item'

  export let items: Item[]
  export let current_items: Item[]

  let current_filters = {}

  function filter_items(key: string, value: boolean|string|number) {
    // Reset the list of items
    current_items = items

    // Update the list of filters
    document.querySelectorAll(`[id^="filter-${key}-"]`).forEach(el => el.classList.remove('selected'))
    if (value == "all") {
      if (current_filters[key] != null) {
        delete current_filters[key] 
        document.querySelector(`[id="filter-${key}-${value}"]`).classList.add('selected')
      }
    } else {
      current_filters[key] = value
      document.querySelector(`[id="filter-${key}-${value}"]`).classList.add('selected')
    }

    // Apply filters
    for (const [key, value] of Object.entries(current_filters)) {
      if (value == false || value == "none" || value == 0) {
        current_items = current_items.filter(item => {
          return item[key] == null || item[key] == false || item[key] == 0
        })
      } else {
        current_items = current_items.filter(item => item[key] == value)
      }
    }
  }

  function reset_filters() {
    current_filters = {}
    current_items = items
    document.querySelectorAll(`[id^="filter-"]`).forEach(el => el.classList.remove('selected'))
    document.querySelectorAll(`[id$="-all"]`).forEach(el => el.classList.add('selected'))
  }
</script>

<p>
  Filters: [<a href="#/" on:click={reset_filters}>Reset all</a>]
  <br />
  Listened:
  [<a href="#/" id="filter-listened-all" on:click={() => filter_items("listened", "all")} class="selected">all</a>]
  [<a href="#/" id="filter-listened-true" on:click={() => filter_items("listened", true)}>yes</a>]
  [<a href="#/" id="filter-listened-false" on:click={() => filter_items("listened", false)}>no</a>]
  <br />
  Stars:
  [<a href="#/" id="filter-stars-all" on:click={() => filter_items("stars", "all")} class="selected">all</a>]
  [<a href="#/" id="filter-stars-none" on:click={() => filter_items("stars", "none")}>none</a>]
  [<a href="#/" id="filter-stars-1" on:click={() => filter_items("stars", 1)} class="star">★</a>]
  [<a href="#/" id="filter-stars-2" on:click={() => filter_items("stars", 2)} class="star">★★</a>]
  [<a href="#/" id="filter-stars-3" on:click={() => filter_items("stars", 3)} class="star">★★★</a>]
  <br />
  Fav:
  [<a href="#/" id="filter-fav-all" on:click={() => filter_items("fav", "all")} class="selected">all</a>]
  [<a href="#/" id="filter-fav-true" on:click={() => filter_items("fav", true)}>yes</a>]
  [<a href="#/" id="filter-fav-false" on:click={() => filter_items("fav", false)}>no</a>]
  Meh:
  [<a href="#/" id="filter-meh-all" on:click={() => filter_items("meh", "all")} class="selected">all</a>]
  [<a href="#/" id="filter-meh-true" on:click={() => filter_items("meh", true)}>yes</a>]
  [<a href="#/" id="filter-meh-false" on:click={() => filter_items("meh", false)}>no</a>]
  <br />
  Perso <span class="heart">&hearts;</span>:
  [<a href="#/" id="filter-perso-all" on:click={() => filter_items("perso", "all")} class="selected">all</a>]
  [<a href="#/" id="filter-perso-true" on:click={() => filter_items("perso", true)}>yes</a>]
  [<a href="#/" id="filter-perso-false" on:click={() => filter_items("perso", false)}>no</a>]
  Fr <img class="flag" src={flag_fr} alt="fr" />:
  [<a href="#/" id="filter-fr-all" on:click={() => filter_items("fr", "all")} class="selected">all</a>]
  [<a href="#/" id="filter-fr-true" on:click={() => filter_items("fr", true)}>yes</a>]
  [<a href="#/" id="filter-fr-false" on:click={() => filter_items("fr", false)}>no</a>]
  <br />
  Standard <span class="jazz">&sung;</span>:
  [<a href="#/" id="filter-standard-all" on:click={() => filter_items("standard", "all")} class="selected">all</a>]
  [<a href="#/" id="filter-standard-true" on:click={() => filter_items("standard", true)}>yes</a>]
  [<a href="#/" id="filter-standard-false" on:click={() => filter_items("standard", false)}>no</a>]
  <br />
  Genres:
  [<a href="#/" id="filter-genre-all" on:click={() => filter_items("genre", "all")} class="selected">all</a>]
  [<a href="#/" id="filter-genre-none" on:click={() => filter_items("genre", "none")}>none</a>]
  <br />
  [<a href="#/" id="filter-genre-rock"on:click={() => filter_items("genre", "rock")}><span class="genre rock">&#9650;</span> rock</a>]
  [<a href="#/" id="filter-genre-hard-rock"on:click={() => filter_items("genre", "hard-rock")}><span class="genre hard-rock">&#9650;</span> hard-rock</a>]
  [<a href="#/" id="filter-genre-rock-n-roll"on:click={() => filter_items("genre", "rock-n-roll")}><span class="genre rock-n-roll">&#9650;</span> rock-n-roll</a>]
  <br />
  [<a href="#/" id="filter-genre-punk"on:click={() => filter_items("genre", "punk")}><span class="genre punk">&#9650;</span> punk</a>]
  [<a href="#/" id="filter-genre-grunge"on:click={() => filter_items("genre", "grunge")}><span class="genre grunge">&#9650;</span> grunge</a>]
  [<a href="#/" id="filter-genre-metal"on:click={() => filter_items("genre", "metal")}><span class="genre metal">&#9650;</span> metal</a>]
  [<a href="#/" id="filter-genre-country"on:click={() => filter_items("genre", "country")}><span class="genre country">&#9650;</span> country</a>]
  <br />
  [<a href="#/" id="filter-genre-soul"on:click={() => filter_items("genre", "soul")}><span class="genre soul">&#11043;</span> soul</a>]
  [<a href="#/" id="filter-genre-trip-hop"on:click={() => filter_items("genre", "trip-hop")}><span class="genre trip-hop">&#11043;</span> trip-hop</a>]
  [<a href="#/" id="filter-genre-pop"on:click={() => filter_items("genre", "pop")}><span class="genre pop">&#11043;</span> pop</a>]
  [<a href="#/" id="filter-genre-funk"on:click={() => filter_items("genre", "funk")}><span class="genre funk">&#11043;</span> funk</a>]
  <br />
  [<a href="#/" id="filter-genre-jazz"on:click={() => filter_items("genre", "jazz")}><span class="genre jazz">&#9670;</span> jazz</a>]
  [<a href="#/" id="filter-genre-disco"on:click={() => filter_items("genre", "disco")}><span class="genre disco">&#9670;</span> disco</a>]
  [<a href="#/" id="filter-genre-reggae"on:click={() => filter_items("genre", "reggae")}><span class="genre reggae">&#9670;</span> reggae</a>]
  [<a href="#/" id="filter-genre-r-n-b"on:click={() => filter_items("genre", "r-n-b")}><span class="genre r-n-b">&#9670;</span> r-n-b</a>]
  <br />
  [<a href="#/" id="filter-genre-world"on:click={() => filter_items("genre", "world")}><span class="genre world">&#9632;</span> world</a>]
  [<a href="#/" id="filter-genre-classical"on:click={() => filter_items("genre", "classical")}><span class="genre classical">&#9632;</span> classical</a>]
  [<a href="#/" id="filter-genre-swing"on:click={() => filter_items("genre", "swing")}><span class="genre swing">&#9632;</span> swing</a>]
  [<a href="#/" id="filter-genre-blues"on:click={() => filter_items("genre", "blues")}><span class="genre blues">&#9632;</span> blues</a>]
  <br />
  [<a href="#/" id="filter-genre-folk"on:click={() => filter_items("genre", "folk")}><span class="genre folk">&#9658;</span> folk</a>]
  [<a href="#/" id="filter-genre-electro"on:click={() => filter_items("genre", "electro")}><span class="genre electro">&#9658;</span> electro</a>]
  [<a href="#/" id="filter-genre-rap"on:click={() => filter_items("genre", "rap")}><span class="genre rap">&#9658;</span> rap</a>]
  [<a href="#/" id="filter-genre-chanson"on:click={() => filter_items("genre", "chanson")}><span class="genre chanson">&#9658;</span> chanson</a>]
  <br />
  [<a href="#/" id="filter-genre-piano"on:click={() => filter_items("genre", "piano")}><span class="emoticon piano">&#127929;</span> piano</a>]
  [<a href="#/" id="filter-genre-bluegrass"on:click={() => filter_items("genre", "bluegrass")}><span class="genre bluegrass">&#9658;</span> bluegrass</a>]
  [<a href="#/" id="filter-genre-new-wave"on:click={() => filter_items("genre", "new-wave")}><span class="genre new-wave">&#9658;</span> new-wave</a>]
</p>
