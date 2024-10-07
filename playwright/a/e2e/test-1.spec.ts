import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://winder.everis.com:8080/app/clients/615fb6fa8e518e72582a33be/evaluations/journeyToCloud');
  await page.goto('http://winder.everis.com:8080/');
  await page.goto('http://winder.everis.com:8080/login?redirect=%2Fapp%2Fclients%2F615fb6fa8e518e72582a33be%2Fevaluations%2FjourneyToCloud');
  await page.goto('https://adfsprod40.everis.com/adfs/oauth2/authorize?client_id=7959725b-d46c-4ea0-bb9a-16fa51aa5093&response_type=id_token+token&redirect_uri=http://winder.everis.com:8080/callback&scope=openid&response_mode=fragment&state=/app/clients/615fb6fa8e518e72582a33be/evaluations/journeyToCloud&nonce=none');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('3005687704Diana!');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('button', { name: 'Add' }).click();
});