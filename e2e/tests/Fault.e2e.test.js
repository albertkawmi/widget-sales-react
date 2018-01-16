import { By, until } from 'selenium-webdriver'
import { defaultTimeout, driver, load, rootEl } from '../helpers'

beforeAll(async () => {
  await load('fault')
})

describe('Fault Page', () => {
  it('has the correct header', async () => {
    const pageHeading = await rootEl()
      .findElement(By.css('.page-heading'))

    const text = await pageHeading.getText()
    expect(text).toBe('A Faulty Page')
  })

  it('shows an error message and hides it when dismissed', async () => {
    const error = By.css('.error')

    await driver.wait(
      until.elementLocated(error),
      defaultTimeout
    )

    const errorMessage = await rootEl()
      .findElement(error)
      .getText()

    expect(errorMessage).toMatch(/^Sorry, this page always errors out!/)

    await rootEl()
      .findElement(By.css('.error__dismiss'))
      .click()

    const errorAfterDismiss = await rootEl().findElements(error)
    expect(
      errorAfterDismiss.length
    ).toBe(0)
  })
})