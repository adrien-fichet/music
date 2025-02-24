import { data } from "./data"
import { readable, writable, derived } from "svelte/store"

const items = readable(data)
const filters = writable({ year: "2020", meh: false })

const current_items = derived([items, filters], ([$items, $filters]) => {
  return $items.filter((item) => {
    for (const [key, value] of Object.entries($filters)) {
      let display_item = true

      if (key === "year") {
        if (value === "lt-1950") {
          display_item = item[key] < 1950
        } else {
          display_item = ("" + item[key]).startsWith("" + (value as string).slice(0, 3))
        }
      } else if (!value) {
        display_item = !item[key as keyof typeof item]
      } else {
        display_item = item[key as keyof typeof item] === value
      }

      if (display_item === false) {
        return false
      }
    }

    return true
  })
})

const loading = writable(false)

export { items, filters, current_items, loading }
