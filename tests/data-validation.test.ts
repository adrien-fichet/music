import { expect, it } from 'vitest'
import { data } from '../src/data'
import { open } from 'node:fs/promises'
import type Item from '../src/item'

const msg = (item: Item): string => `Error on item: ${JSON.stringify(item)}`

it('should not use fields with single or double quotes', async () => {
  const data_file = await open('./src/data.ts')
  const item_fields = [
    'title', 'artist', 'year', 'genre', 'comment', 'listened', 'fav', 'meh', 'fr', 
    'standard', 'stars', 'perso', 'single', 'ep'
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
    if (!!item.listened) {
      expect(item.genre, msg(item)).toBeDefined()
    }
  }
})
