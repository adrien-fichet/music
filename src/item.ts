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
}

export default Item
