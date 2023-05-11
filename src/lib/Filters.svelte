<script lang="ts">
  import flag_fr from '../assets/flag-fr.png'
  import Filter from './Filter.svelte'
  import { filters } from '../stores'

  function reset_filters() {
    $filters = {}
    document.querySelectorAll(`[id^="filter-"]`).forEach(el => el.classList.remove('selected'))
    document.querySelectorAll(`[id$="-all"]`).forEach(el => el.classList.add('selected'))
  }

  function set_filter(key: string, value: string|boolean|number) {
    document.querySelectorAll(`[id^="filter-${key}-"]`).forEach(el => el.classList.remove('selected'))
    if (value === 'all') {
      if ($filters[key] !== undefined) {
        delete $filters[key]
        $filters = $filters // force assignation to update derived stores
        document.querySelector(`[id="filter-${key}-${value}"]`).classList.add('selected')
      }
    } else {
      $filters[key] = value
      document.querySelector(`[id="filter-${key}-${value}"]`).classList.add('selected')
    }
  }
</script>

<p>
  Filters: <Filter id="reset" onclick={reset_filters} text={'Reset all'} />
  <br />
  Listened:
  <Filter id="listened-all" onclick={() => set_filter('listened', 'all')} text={'all'} selected={true} />
  <Filter id="listened-true" onclick={() => set_filter('listened', true)} text={'yes'} />
  <Filter id="listened-false" onclick={() => set_filter('listened', false)} text={'no'} />
  <br />
  Stars:
  <Filter id="stars-all" onclick={() => set_filter('stars', 'all')} text={'all'} selected={true} />
  <Filter id="stars-false" onclick={() => set_filter('stars', false)} text={'none'} />
  <Filter id="stars-1" onclick={() => set_filter('stars', 1)} class_name={'star'} text={'★'} />
  <Filter id="stars-2" onclick={() => set_filter('stars', 2)} class_name={'star'} text={'★★'} />
  <Filter id="stars-3" onclick={() => set_filter('stars', 3)} class_name={'star'} text={'★★★'} />
  <br />
  Fav:
  <Filter id="fav-all" onclick={() => set_filter('fav', 'all')} text={'all'} selected={true} />
  <Filter id="fav-true" onclick={() => set_filter('fav', true)} text={'yes'} />
  <Filter id="fav-false" onclick={() => set_filter('fav', false)} text={'no'} />
  Meh:
  <Filter id="meh-all" onclick={() => set_filter('meh', 'all')} text={'all'} selected={true} />
  <Filter id="meh-true" onclick={() => set_filter('meh', true)} text={'yes'} />
  <Filter id="meh-false" onclick={() => set_filter('meh', false)} text={'no'} />
  <br />
  Perso <span class="heart">♥</span>:
  <Filter id="perso-all" onclick={() => set_filter('perso', 'all')} text={'all'} selected={true} />
  <Filter id="perso-true" onclick={() => set_filter('perso', true)} text={'yes'} />
  <Filter id="perso-false" onclick={() => set_filter('perso', false)} text={'no'} />
  Fr <img class="flag" src={flag_fr} alt='fr' />:
  <Filter id="fr-all" onclick={() => set_filter('fr', 'all')} text={'all'} selected={true} />
  <Filter id="fr-true" onclick={() => set_filter('fr', true)} text={'yes'} />
  <Filter id="fr-false" onclick={() => set_filter('fr', false)} text={'no'} />
  <br />
  Standard <span class="jazz">♪</span>:
  <Filter id="standard-all" onclick={() => set_filter('standard', 'all')} text={'all'} selected={true} />
  <Filter id="standard-true" onclick={() => set_filter('standard', true)} text={'yes'} />
  <Filter id="standard-false" onclick={() => set_filter('standard', false)} text={'no'} />
  <br />
  Genres:
  <Filter id="genre-all" onclick={() => set_filter('genre', 'all')} text={'all'} selected={true} />
  <Filter id="genre-false" onclick={() => set_filter('genre', false)} text={'none'} />
  <br />
  <Filter id="genre-rock" onclick={() => set_filter('genre', 'rock')} text={'rock'} />
  <Filter id="genre-hard-rock" onclick={() => set_filter('genre', 'hard-rock')} text={'hard-rock'} />
  <Filter id="genre-rock-n-roll" onclick={() => set_filter('genre', 'rock-n-roll')} text={'rock-n-roll'} />
  <br />
  <Filter id="genre-punk" onclick={() => set_filter('genre', 'punk')} text={'punk'} />
  <Filter id="genre-grunge" onclick={() => set_filter('genre', 'grunge')} text={'grunge'} />
  <Filter id="genre-metal" onclick={() => set_filter('genre', 'metal')} text={'metal'} />
  <Filter id="genre-country" onclick={() => set_filter('genre', 'country')} text={'country'} />
  <br />
  <Filter id="genre-soul" onclick={() => set_filter('genre', 'soul')} text={'soul'} />
  <Filter id="genre-trip-hop" onclick={() => set_filter('genre', 'trip-hop')} text={'trip-hop'} />
  <Filter id="genre-pop" onclick={() => set_filter('genre', 'pop')} text={'pop'} />
  <Filter id="genre-funk" onclick={() => set_filter('genre', 'funk')} text={'funk'} />
  <br />
  <Filter id="genre-jazz" onclick={() => set_filter('genre', 'jazz')} text={'jazz'} />
  <Filter id="genre-disco" onclick={() => set_filter('genre', 'disco')} text={'disco'} />
  <Filter id="genre-reggae" onclick={() => set_filter('genre', 'reggae')} text={'reggae'} />
  <Filter id="genre-r-n-b" onclick={() => set_filter('genre', 'r-n-b')} text={'r-n-b'} />
  <br />
  <Filter id="genre-world" onclick={() => set_filter('genre', 'world')} text={'world'} />
  <Filter id="genre-classical" onclick={() => set_filter('genre', 'classical')} text={'classical'} />
  <Filter id="genre-swing" onclick={() => set_filter('genre', 'swing')} text={'swing'} />
  <Filter id="genre-blues" onclick={() => set_filter('genre', 'blues')} text={'blues'} />
  <br />
  <Filter id="genre-folk" onclick={() => set_filter('genre', 'folk')} text={'folk'} />
  <Filter id="genre-electro" onclick={() => set_filter('genre', 'electro')} text={'electro'} />
  <Filter id="genre-rap" onclick={() => set_filter('genre', 'rap')} text={'rap'} />
  <Filter id="genre-chanson" onclick={() => set_filter('genre', 'chanson')} text={'chanson'} />
  <br />
  <Filter id="genre-piano" onclick={() => set_filter('genre', 'piano')} text={'piano'} />
  <Filter id="genre-meme" onclick={() => set_filter('genre', 'meme')} text={'meme'} />
  <Filter id="genre-new-wave" onclick={() => set_filter('genre', 'new-wave')} text={'new-wave'} />
  <br />
  Year:
  <Filter id="year-all" onclick={() => set_filter('year', 'all')} text={'all'} />
  <br />
  <Filter id="year-lt-1950" onclick={() => set_filter('year', 'lt-1950')} text={'< 1950'} />
  <Filter id="year-1950" onclick={() => set_filter('year', '1950')} text={'1950s'} />
  <Filter id="year-1960" onclick={() => set_filter('year', '1960')} text={'1960s'} />
  <br />
  <Filter id="year-1970" onclick={() => set_filter('year', '1970')} text={'1970s'} />
  <Filter id="year-1980" onclick={() => set_filter('year', '1980')} text={'1980s'} />
  <Filter id="year-1990" onclick={() => set_filter('year', '1990')} text={'1990s'} />
  <br />
  <Filter id="year-2000" onclick={() => set_filter('year', '2000')} text={'2000s'} />
  <Filter id="year-2010" onclick={() => set_filter('year', '2010')} text={'2010s'} />
  <Filter id="year-2020" onclick={() => set_filter('year', '2020')} text={'2020s'} selected={true} />
</p>
