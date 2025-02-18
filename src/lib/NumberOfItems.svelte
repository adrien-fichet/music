<script lang="ts">
  import { items } from "../stores"
  import { percentage } from "../percentage"

  const number_listened: number = $items.filter((item) => item.listened == true).length
  const items_length: number = $items.length
  const percent: number = percentage(number_listened, items_length, 2)
</script>

<p>
  <b>Number of items</b>: {number_listened} listened out of {items_length} in total ({percent}%)
</p>
