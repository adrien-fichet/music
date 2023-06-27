<script lang="ts">
  import { items } from '../stores'

  let number_listened: number = $items.filter(item => item.listened == true).length
  let items_length: number = $items.length
  let percentage: number = Math.floor(number_listened / items_length * 100 * 100) / 100
</script>

<p>
    <b>Number of items</b>: {number_listened} listened 
    out of {items_length} in total 
    ({percentage}%)
</p>
