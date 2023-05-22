interface Item {
  title: string,
  artist: string,
  year: number,
  genre?: string,
  comment?: string,
  listened?: boolean,
  fav?: boolean,
  meh?: boolean,
  fr?: boolean,
  standard?: boolean,
  stars?: number,
  perso?: boolean,
  single?: boolean,
  ep?: boolean,

  // Additional properties computed at runtime
  tr_class?: string,
  icon?: string,
  icon_class?: string,
  spotify_url?: string,
}

export default Item
