import { expect, it } from 'vitest'
import { data } from '../src/data'
import { open } from 'node:fs/promises'
import type Item from '../src/item'

const msg = (item: Item): string => `Error on item: ${JSON.stringify(item)}`

it('should not use fields with single or double quotes', async () => {
  const data_file = await open('./src/data.ts')
  const item_fields = [
    'title', 'artist', 'year', 'genre', 'comment', 'listened', 'fav', 'meh', 'fr',
    'standard', 'stars', 'perso', 'single', 'ep', 'live'
  ]
  for await (const line of data_file.readLines()) {
    for (const field of item_fields) {
      expect(line).not.toContain(`"${field}":`)
      expect(line).not.toContain(`'${field}':`)
    }
  }
})

it('fav should be true if stars >= 2', () => {
  for (const item of data) {
    if (!!item.stars && item.stars >= 2) {
      expect(item.fav, msg(item)).toBe(true)
    }
  }
})

it('should have a genre if listened', () => {
  for (const item of data) {
    if (item.listened) {
      expect(item.genre, msg(item)).toBeDefined()
    }
  }
})

it('should not have item duplicates', () => {
  const titles_and_artists = data.map(
    function (item: Item): string {
      return `${item.title.toLowerCase()} - ${item.artist.toLowerCase()}`
    }
  )
  const seen = {}
  for (const item of titles_and_artists) {
    if (item in seen) {
      throw new Error(`Found duplicate: ${item}`)
    } else {
      seen[item] = true
    }
  }
})

it('should have at least one star if favorited', () => {
  for (const item of data) {
    if (item.genre === "classical") {
      continue // classical items are not starred, skip them
    }
    if (item.fav) {
      expect(item.stars, msg(item)).toBeDefined()
      expect(item.stars, msg(item)).toBeGreaterThan(0)
    }
  }
})

it.runIf(process.env.DEBUG === "true")('print singles and standards not yet listened', () => {
  for (const item of data.filter(item => (!!item.single || !!item.standard) && !item.listened)) {
    console.log(`${item.title} - ${item.artist} (${item.year})`)
  }
})

it('should not be marked as "single" if it is a standard', () => {
  for (const item of data) {
    if (item.standard) {
      expect(item.single, msg(item)).toBeUndefined()
    }
  }
})

it('items should be ordered by years in chronological order', () => {
  let previous_year = 0
  for (const item of data) {
    expect(item.year, msg(item)).toBeGreaterThanOrEqual(previous_year)
    previous_year = item.year
  }
})

it('should be marked as listened if it has stars, is fav or meh', () => {
  for (const item of data) {
    if (!!item.stars || !!item.fav || !!item.meh) {
      expect(item.listened, msg(item)).toBeTruthy()
    }
  }
})
