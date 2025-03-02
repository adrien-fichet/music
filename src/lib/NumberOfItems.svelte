<script lang="ts">
  import { data } from "../data";
  import { percentage } from "../percentage";

  const number_listened: number = data.filter((item) => item.listened == true).length;
  const items_length: number = data.length;
  const percent: number = percentage(number_listened, items_length, 2);
</script>

<p>
  <b>Number of items</b>: {number_listened} listened out of {items_length} in total ({percent}%)
</p>
