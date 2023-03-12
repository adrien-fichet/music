class Icon {
    static from_genre(genre: string) {
        switch (genre) {
            case "piano": return "🎹"
            case "rock" || "hard-rock" || "rock-n-roll" || 
                "punk" || "grunge" || "metal" || "country": return "▲"
            case "soul" || "trip-hop" || "pop" || "funk": return "⬣"
            case "jazz" || "disco" || "reggae" || "r-n-b": return "◆"
            case "world" || "classical" || "swing" || "blues": return "■"
            case "folk" || "electro" || "rap" || "chanson" || "bluegrass" 
                || "new-wave": return "►"
            default: return "■"
        }
    }

    static class_from_genre(genre: string) {
        switch (genre) {
            case "piano": return "emoticon"
            default: return "genre"
        }
    }
}

export default Icon
