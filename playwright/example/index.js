const { chromium } = require('playwright')

;(async () => {
  // const url = 'http://localhost:8090/login' // 'https://github.com/login'
  const user = 'ssanabrg@emeal.nttdata.com'
  const pass = '3005687704Diana!'
  const selectorLogin = '#userNameInput' // #login_field
  const selectorPass = '#passwordInput' // #password
  const selectorBtn = '#submitButton' // input[type="submit"]
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto('http://winder.everis.com:8080/app/home?tab=clients')
  await page.locator(selectorLogin).fill(user)
  await page.locator(selectorLogin).inputValue()
  await page.locator(selectorPass).fill(pass)
  await page.locator(selectorPass).inputValue()
  await page.locator(selectorBtn).click()

  // console.log(login)
  // console.log(password)
  await page.goto('http://winder.everis.com:8080/app/clients/615fb6fa8e518e72582a33be/evaluations/journeyToCloud')
  await page.screenshot({ path: 'a.png' })

  await page.locator('.wdr-button.lg.human-blue.no-assessments').click()

  // await page.getByRole('button', { name: 'Create J2C Application' }).click()
  await page.getByPlaceholder('The application\'s name').click()
  await page.getByPlaceholder('The application\'s name').fill('app1')
  await page.getByPlaceholder('The application\'s alias').click()
  await page.getByPlaceholder('The application\'s alias').fill('app1')
  await page.getByPlaceholder('The application\'s description').click()
  await page.getByPlaceholder('The application\'s description').fill('asdf')
  await page.getByRole('button', { name: 'Add' }).click()
  await page.screenshot({ path: 'J2C.png' })
  await browser.close()
})()
