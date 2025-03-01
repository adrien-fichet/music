import { type Genre } from "./genre";

interface Item {
  title: string;
  artist: string;
  year: number;
  genre?: Genre;
  comment?: string;
  listened?: boolean;
  fav?: boolean;
  meh?: boolean;
  fr?: boolean;
  standard?: boolean;
  stars?: number;
  perso?: boolean;
  single?: boolean;
  ep?: boolean;
  live?: boolean;

  // Additional properties computed only once at runtime
  tr_class?: string;
  icon?: string;
  icon_class?: string;
  spotify_url?: string;
}

export { type Item };
