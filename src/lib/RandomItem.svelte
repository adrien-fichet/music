<script lang="ts">
  export let items_not_listened_yet: Object[]

  let random_item: string

  function get_random_item() {
    if (items_not_listened_yet.length == 0) {
      random_item = ''
    } else {
      let item = items_not_listened_yet[Math.floor(Math.random() * items_not_listened_yet.length)]
      random_item = '"' + item['title'] + '" - ' + item['artist'] + ' (' + item['year'] + ')'
    }
  }

  get_random_item()
</script>

<p>
  <a href="#/" on:click={get_random_item}>One random item (not yet listened):</a> {random_item} 
</p>
