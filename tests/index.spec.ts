// tests/index.spec.ts
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://bobs-adoption.herokuapp.com/');
  const name = await page.innerText('.navbar__brand');
  expect(name).toBe('Bob\'s Adoption Center');
});