<script lang="ts">
  import flag_fr from '../assets/flag-fr.png'
  import Filter from './Filter.svelte'
  import type Item from '../item'

  export let items: Item[]
  export let current_items: Item[]

  let current_filters = {"year": "202"}

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
      if (key == "year") {
        if (value == "0") {
          current_items = current_items.filter(item => item[key] < 1950)
        } else {
          current_items = current_items.filter(item => ("" + item[key]).startsWith("" + value))
        }
      } else if (value == false || value == "none" || value == 0) {
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
  Filters: <Filter id="reset" onclick={reset_filters} text={"Reset all"} />
  <br />
  Listened:
  <Filter id="listened-all" onclick={() => filter_items("listened", "all")} text={"all"} selected={true} />
  <Filter id="listened-true" onclick={() => filter_items("listened", true)} text={"yes"} />
  <Filter id="listened-false" onclick={() => filter_items("listened", false)} text={"no"} />
  <br />
  Stars:
  <Filter id="stars-all" onclick={() => filter_items("stars", "all")} text={"all"} selected={true} />
  <Filter id="stars-none" onclick={() => filter_items("stars", "none")} text={"none"} />
  <Filter id="stars-1" onclick={() => filter_items("stars", 1)} class_name={"star"} text={"★"} />
  <Filter id="stars-2" onclick={() => filter_items("stars", 2)} class_name={"star"} text={"★★"} />
  <Filter id="stars-3" onclick={() => filter_items("stars", 3)} class_name={"star"} text={"★★★"} />
  <br />
  Fav:
  <Filter id="fav-all" onclick={() => filter_items("fav", "all")} text={"all"} selected={true} />
  <Filter id="fav-true" onclick={() => filter_items("fav", true)} text={"yes"} />
  <Filter id="fav-false" onclick={() => filter_items("fav", false)} text={"no"} />
  Meh:
  <Filter id="meh-all" onclick={() => filter_items("meh", "all")} text={"all"} selected={true} />
  <Filter id="meh-true" onclick={() => filter_items("meh", true)} text={"yes"} />
  <Filter id="meh-false" onclick={() => filter_items("meh", false)} text={"no"} />
  <br />
  Perso <span class="heart">&hearts;</span>:
  <Filter id="perso-all" onclick={() => filter_items("perso", "all")} text={"all"} selected={true} />
  <Filter id="perso-true" onclick={() => filter_items("perso", true)} text={"yes"} />
  <Filter id="perso-false" onclick={() => filter_items("perso", false)} text={"no"} />
  Fr <img class="flag" src={flag_fr} alt="fr" />:
  <Filter id="fr-all" onclick={() => filter_items("fr", "all")} text={"all"} selected={true} />
  <Filter id="fr-true" onclick={() => filter_items("fr", true)} text={"yes"} />
  <Filter id="fr-false" onclick={() => filter_items("fr", false)} text={"no"} />
  <br />
  Standard <span class="jazz">&sung;</span>:
  <Filter id="standard-all" onclick={() => filter_items("standard", "all")} text={"all"} selected={true} />
  <Filter id="standard-true" onclick={() => filter_items("standard", true)} text={"yes"} />
  <Filter id="standard-false" onclick={() => filter_items("standard", false)} text={"no"} />
  <br />
  Genres:
  <Filter id="genre-all" onclick={() => filter_items("genre", "all")} text={"all"} selected={true} />
  <Filter id="genre-none" onclick={() => filter_items("genre", "none")} text={"none"} />
  <br />
  <Filter id="genre-rock" onclick={() => filter_items("genre", "rock")} text={"rock"} />
  <Filter id="genre-hard-rock" onclick={() => filter_items("genre", "hard-rock")} text={"hard-rock"} />
  <Filter id="genre-rock-n-roll" onclick={() => filter_items("genre", "rock-n-roll")} text={"rock-n-roll"} />
  <br />
  <Filter id="genre-punk" onclick={() => filter_items("genre", "punk")} text={"punk"} />
  <Filter id="genre-grunge" onclick={() => filter_items("genre", "grunge")} text={"grunge"} />
  <Filter id="genre-metal" onclick={() => filter_items("genre", "metal")} text={"metal"} />
  <Filter id="genre-country" onclick={() => filter_items("genre", "country")} text={"country"} />
  <br />
  <Filter id="genre-soul" onclick={() => filter_items("genre", "soul")} text={"soul"} />
  <Filter id="genre-trip-hop" onclick={() => filter_items("genre", "trip-hop")} text={"trip-hop"} />
  <Filter id="genre-pop" onclick={() => filter_items("genre", "pop")} text={"pop"} />
  <Filter id="genre-funk" onclick={() => filter_items("genre", "funk")} text={"funk"} />
  <br />
  <Filter id="genre-jazz" onclick={() => filter_items("genre", "jazz")} text={"jazz"} />
  <Filter id="genre-disco" onclick={() => filter_items("genre", "disco")} text={"disco"} />
  <Filter id="genre-reggae" onclick={() => filter_items("genre", "reggae")} text={"reggae"} />
  <Filter id="genre-r-n-b" onclick={() => filter_items("genre", "r-n-b")} text={"r-n-b"} />
  <br />
  <Filter id="genre-world" onclick={() => filter_items("genre", "world")} text={"world"} />
  <Filter id="genre-classical" onclick={() => filter_items("genre", "classical")} text={"classical"} />
  <Filter id="genre-swing" onclick={() => filter_items("genre", "swing")} text={"swing"} />
  <Filter id="genre-blues" onclick={() => filter_items("genre", "blues")} text={"blues"} />
  <br />
  <Filter id="genre-folk" onclick={() => filter_items("genre", "folk")} text={"folk"} />
  <Filter id="genre-electro" onclick={() => filter_items("genre", "electro")} text={"electro"} />
  <Filter id="genre-rap" onclick={() => filter_items("genre", "rap")} text={"rap"} />
  <Filter id="genre-chanson" onclick={() => filter_items("genre", "chanson")} text={"chanson"} />
  <br />
  <Filter id="genre-piano" onclick={() => filter_items("genre", "piano")} text={"piano"} />
  <Filter id="genre-meme" onclick={() => filter_items("genre", "meme")} text={"meme"} />
  <Filter id="genre-new-wave" onclick={() => filter_items("genre", "new-wave")} text={"new-wave"} />
  <br />
  Year:
  <Filter id="year-all" onclick={() => filter_items("year", "all")} text={"all"} />
  <br />
  <Filter id="year-0" onclick={() => filter_items("year", "0")} text={"< 1950"} />
  <Filter id="year-195" onclick={() => filter_items("year", "195")} text={"1950s"} />
  <Filter id="year-196" onclick={() => filter_items("year", "196")} text={"1960s"} />
  <br />
  <Filter id="year-197" onclick={() => filter_items("year", "197")} text={"1970s"} />
  <Filter id="year-198" onclick={() => filter_items("year", "198")} text={"1980s"} />
  <Filter id="year-199" onclick={() => filter_items("year", "199")} text={"1990s"} />
  <br />
  <Filter id="year-200" onclick={() => filter_items("year", "200")} text={"2000s"} />
  <Filter id="year-201" onclick={() => filter_items("year", "201")} text={"2010s"} />
  <Filter id="year-202" onclick={() => filter_items("year", "202")} text={"2020s"} selected={true} />
</p>
