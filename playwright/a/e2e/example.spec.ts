import { test, expect, chromium } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('hello', async ({ page }) => {
  // const url = 'http://localhost:8090/login' // 'https://github.com/login'
  const user = 'ssanabrg@emeal.nttdata.com'
  const pass = '3005687704Diana!'
  const selectorLogin = '#userNameInput' // #login_field
  const selectorPass = '#passwordInput' // #password
  const selectorBtn = '#submitButton' // input[type="submit"]
  // const browser = await chromium.launch()
  // const page = await browser.newPage()
  // await page.goto(url)

  // await page.locator(selectorLogin).fill(user)
  // const login = await page.locator(selectorLogin).inputValue()
  // await page.locator(selectorPass).fill(pass)
  // const password = await page.locator(selectorPass).inputValue()

  // console.log(login)
  // console.log(password)
  // await page.locator(selectorBtn).click()

  await page.goto('http://winder.everis.com:8080/app/home?tab=clients')
  //await page.goto('http://winder.everis.com:8080/app/clients/615fb6fa8e518e72582a33be/evaluations/journeyToCloud')

  await page.locator(selectorLogin).fill(user)
  const login = await page.locator(selectorLogin).inputValue()
  await page.locator(selectorPass).fill(pass)
  const password = await page.locator(selectorPass).inputValue()
  await page.locator(selectorBtn).click()


  await page.goto('http://winder.everis.com:8080/app/clients/615fb6fa8e518e72582a33be/evaluations/journeyToCloud')

  await page.locator('.wdr-button.lg.human-blue.no-assessments').waitFor()
})
