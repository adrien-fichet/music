class Icon {
    static from_genre(genre: string) {
        switch (genre) {
            case "piano":
                return "🎹"
            case "rock":
            case "hard-rock":
            case "rock-n-roll":
            case "punk":
            case "grunge":
            case "metal":
            case "country":
                return "▲"
            case "soul":
            case "trip-hop":
            case "pop":
            case "funk":
                return "⬣"
            case "jazz":
            case "disco":
            case "reggae":
            case "r-n-b":
                return "◆"
            case "world":
            case "classical":
            case "swing":
            case "blues":
                return "■"
            case "folk":
            case "electro":
            case "rap":
            case "chanson":
            case "new-wave":
                return "►"
            default: 
                return "■"
        }
    }

    static class_from_genre(genre: string) {
        switch (genre) {
            case "piano":
                return "emoticon"
            default: 
                return "genre"
        }
    }
}

export default Icon
