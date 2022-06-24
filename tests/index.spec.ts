// tests/index.spec.ts
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://bobs-adoption.herokuapp.com/');
  const navbarTitle = await page.innerText('.navbar-brand');
  expect(navbarTitle).toBe('Bob\'s Adoption Center');
  // await page.screenshot({ path: 'screenshot.png' });
});

test('can click & open all dogs', async ({ page }) => {
  await page.goto('https://bobs-adoption.herokuapp.com/');
  await page.click('#view-all-index');
  const cardName = await page.innerText('.card-title');
  expect(cardName).toBe('Bob');

});

test('can view individual dog', async ({ page }) => {
  await page.goto('https://bobs-adoption.herokuapp.com/Dogs');
  await page.click('#view-Bob-btn');
  const dogProfileName = await page.innerText('.name');
  expect(dogProfileName).toBe('Bob');
});

test('can got to adopt form', async ({ page }) => {
  await page.goto('https://bobs-adoption.herokuapp.com/dogDetail?dogId=1');
  await page.locator('#adoptBtn').click();
  const availability = await page.innerText('.status');
  expect(availability).toBe('Not Available');
});