import { type Filters } from "./filters";

export const filters: { value: Filters } = $state({
  value: {
    listened: "all",
    stars: "all",
    fav: "all",
    meh: false,
    perso: "all",
    fr: "all",
    standard: "all",
    live: "all",
    genre: "all",
    decade: 2020
  }
});

export const loading = $state({ value: false });

export function load(fn: () => void) {
  // https://stackoverflow.com/a/57659500
  loading.value = true;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fn();
      loading.value = false;
    });
  });
}
