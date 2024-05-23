import { expect, test } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  expect(sum(1, 2)).toBe(3)
})