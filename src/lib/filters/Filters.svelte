<script lang="ts">
  import flag_fr from "../../assets/svg/flag-fr.svg";
  import StarFilters from "./StarFilters.svelte";
  import GenreFilters from "./GenreFilters.svelte";
  import ResetAllFilters from "./ResetAllFilters.svelte";
  import DecadeFilter from "./DecadeFilter.svelte";
  import AllYesNoFilter from "./AllYesNoFilter.svelte";
  import { filters } from "../../states.svelte";
</script>

<fieldset>
  <legend>
    <b>Filters</b>
    <ResetAllFilters />
  </legend>
  Listened:
  <AllYesNoFilter bind:key={filters.value.listened} value="all" />
  <AllYesNoFilter bind:key={filters.value.listened} value={true} />
  <AllYesNoFilter bind:key={filters.value.listened} value={false} />
  <br />
  <StarFilters />
  <br />
  Fav:
  <AllYesNoFilter bind:key={filters.value.fav} value="all" />
  <AllYesNoFilter bind:key={filters.value.fav} value={true} />
  <AllYesNoFilter bind:key={filters.value.fav} value={false} />
  Meh:
  <AllYesNoFilter bind:key={filters.value.meh} value="all" />
  <AllYesNoFilter bind:key={filters.value.meh} value={true} />
  <AllYesNoFilter bind:key={filters.value.meh} value={false} />
  <br />
  Perso <span class="heart">♥</span>:
  <AllYesNoFilter bind:key={filters.value.perso} value="all" />
  <AllYesNoFilter bind:key={filters.value.perso} value={true} />
  <AllYesNoFilter bind:key={filters.value.perso} value={false} />
  Fr <img class="flag" src={flag_fr} alt="fr">:
  <AllYesNoFilter bind:key={filters.value.fr} value="all" />
  <AllYesNoFilter bind:key={filters.value.fr} value={true} />
  <AllYesNoFilter bind:key={filters.value.fr} value={false} />
  <br />
  Standard ♪:
  <AllYesNoFilter bind:key={filters.value.standard} value="all" />
  <AllYesNoFilter bind:key={filters.value.standard} value={true} />
  <AllYesNoFilter bind:key={filters.value.standard} value={false} />
  Live:
  <AllYesNoFilter bind:key={filters.value.live} value="all" />
  <AllYesNoFilter bind:key={filters.value.live} value={true} />
  <AllYesNoFilter bind:key={filters.value.live} value={false} />
</fieldset>
<GenreFilters />
<fieldset>
  <legend>
    <b>Decade</b>
    <DecadeFilter decade="all" />
  </legend>
  <DecadeFilter decade="< 1950" />
  <DecadeFilter decade={1950} />
  <DecadeFilter decade={1960} />
  <br />
  <DecadeFilter decade={1970} />
  <DecadeFilter decade={1980} />
  <DecadeFilter decade={1990} />
  <br />
  <DecadeFilter decade={2000} />
  <DecadeFilter decade={2010} />
  <DecadeFilter decade={2020} />
</fieldset>
