import { expect, it } from "vitest";
import { data } from "../src/data";
import { open } from "node:fs/promises";
import { type MusicalPiece } from "../src/musical-piece";

const msg = (musical_piece: MusicalPiece): string => `Error on musical piece: ${JSON.stringify(musical_piece)}`;

it("should not use fields with single or double quotes", async () => {
  const data_file = await open("./src/data.ts");
  const musical_piece_fields = [
    "title",
    "artist",
    "year",
    "genre",
    "comment",
    "listened",
    "fav",
    "meh",
    "fr",
    "standard",
    "stars",
    "perso",
    "single",
    "ep",
    "live"
  ];
  for await (const line of data_file.readLines()) {
    for (const field of musical_piece_fields) {
      expect(line).not.toContain(`"${field}":`);
      expect(line).not.toContain(`'${field}':`);
    }
  }
});

it("fav should be true if stars >= 2", () => {
  for (const musical_piece of data) {
    if (!!musical_piece.stars && musical_piece.stars >= 2) {
      expect(musical_piece.fav, msg(musical_piece)).toBe(true);
    }
  }
});

it("should have a genre if listened", () => {
  for (const musical_piece of data) {
    if (musical_piece.listened) {
      expect(musical_piece.genre, msg(musical_piece)).toBeDefined();
    }
  }
});

it("should not have musical pieces duplicates", () => {
  const titles_and_artists = data.map(function (musical_piece: MusicalPiece): string {
    return `${musical_piece.title.toLowerCase()} - ${musical_piece.artist.toLowerCase()}`;
  });
  const seen = {};
  for (const musical_piece of titles_and_artists) {
    if (musical_piece in seen) {
      throw new Error(`Found duplicate: ${musical_piece}`);
    } else {
      seen[musical_piece] = true;
    }
  }
});

it("should have at least one star if favorited", () => {
  for (const musical_piece of data) {
    if (musical_piece.genre === "classical") {
      continue; // classical musical_pieces are not starred, skip them
    }
    if (musical_piece.fav) {
      expect(musical_piece.stars, msg(musical_piece)).toBeDefined();
      expect(musical_piece.stars, msg(musical_piece)).toBeGreaterThan(0);
    }
  }
});

it.runIf(process.env.DEBUG === "true")("print singles and standards not yet listened", () => {
  for (const musical_piece of data.filter(
    (musical_piece) => (!!musical_piece.single || !!musical_piece.standard) && !musical_piece.listened
  )) {
    console.log(`${musical_piece.title} - ${musical_piece.artist} (${musical_piece.year})`);
  }
});

it('should not be marked as "single" if it is a standard, meme or vgm', () => {
  for (const musical_piece of data) {
    if (!!musical_piece.standard || musical_piece.genre === "vgm" || musical_piece.genre === "meme") {
      expect(musical_piece.single, msg(musical_piece)).toBeUndefined();
    }
  }
});

it("musical pieces should be ordered by years in chronological order", () => {
  let previous_year = -Infinity;
  for (const musical_piece of data) {
    expect(musical_piece.year, msg(musical_piece)).toBeGreaterThanOrEqual(previous_year);
    previous_year = musical_piece.year;
  }
});

it("should be marked as listened if it has stars, is fav or meh", () => {
  for (const musical_piece of data) {
    if (!!musical_piece.stars || !!musical_piece.fav || !!musical_piece.meh) {
      expect(musical_piece.listened, msg(musical_piece)).toBeTruthy();
    }
  }
});

it("should not have the title in comment", () => {
  for (const musical_piece of data) {
    if (musical_piece.comment) {
      expect(musical_piece.comment.toLowerCase(), msg(musical_piece)).not.toContain(
        `"${musical_piece.title}"`.toLowerCase()
      );
    }
  }
});
