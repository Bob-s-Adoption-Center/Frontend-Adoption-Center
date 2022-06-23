// tests/index.spec.ts
import test from './next-fixture'
import { expect } from '@playwright/test'

test('book title', async ({ page, port }) => {
  await page.goto(`http://localhost:${port}/`)
  const name = await page.innerText('h1')
  expect(name).toBe("Bob's Adoption Center")
})