
module.exports = async function signIn ({ page }) {
  const selectorLogin = '#userNameInput' // #login_field
  const selectorPass = '#passwordInput' // #password
  const selectorBtn = '#submitButton' // input[type="submit"]
  const user = 'ssanabrg@emeal.nttdata.com'
  const pass = '3005687704Diana!'
  await page.goto('http://winder.everis.com:8080/app/home?tab=clients')
  await page.locator(selectorLogin).fill(user)
  await page.locator(selectorLogin).inputValue()
  await page.locator(selectorPass).fill(pass)
  await page.locator(selectorPass).inputValue()
  await page.locator(selectorBtn).click()
}
