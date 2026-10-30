import { type Genre } from "./genre";

export class Icon {
  static from_genre(genre: Genre | string | undefined): string {
    switch (genre) {
      case "piano":
        return "🎹";
      case "rock":
      case "hard-rock":
      case "rock-n-roll":
      case "punk":
      case "metal":
      case "country":
        return "▲";
      case "soul":
      case "trip-hop":
      case "pop":
      case "funk":
      case "grunge":
        return "⬣";
      case "jazz":
      case "disco":
      case "reggae":
      case "r-n-b":
        return "◆";
      case "world":
      case "classical":
      case "fusion":
      case "blues":
        return "■";
      case "folk":
      case "electro":
      case "rap":
      case "chanson":
      case "lofi":
      case "new-wave":
      case "vgm":
        return "►";
      case "meme":
        return "( ͡° ͜ʖ ͡°)";
      default:
        return "■";
    }
  }

  static class_from_genre(genre: Genre | string | undefined): string {
    switch (genre) {
      case "piano":
        return "emoticon";
      default:
        return "genre";
    }
  }
}
