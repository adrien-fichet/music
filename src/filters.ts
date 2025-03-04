import type { Decade } from "./decade";
import type { Genre } from "./genre";

export interface Filters {
  listened: boolean | "all";
  stars: number | "all";
  fav: boolean | "all";
  meh: boolean | "all";
  perso: boolean | "all";
  fr: boolean | "all";
  standard: boolean | "all";
  live: boolean | "all";
  genre: Genre | "all" | false;
  decade: Decade | "all";
}
