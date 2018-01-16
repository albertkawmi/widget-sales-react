import { By } from 'selenium-webdriver'
import { driver, load, rootEl } from '../helpers';

beforeAll(async () => {
  await load('clients')
})

describe('Clients Page', () => {
  it('has the correct header', async () => {
    const heading = await rootEl()
      .findElement(By.css('.page-heading'))

    expect(await heading.getText()).toBe('Clients')
  });

  it('renders the table header row', async () => {
    const headerRows = await find('thead > tr')
    expect(headerRows.length).toBe(1)
  })

  it('renders rows for ten clients', async () => {
    const bodyRows = await find('tbody > tr')
    expect(bodyRows.length).toBe(10)
  })

  it('shows the sales when you click on a client', async () => {
    const button = await first('.select-client-btn')

    return await driver.wait(async () => {
      await button.click()
      const sales = await first('.sales')
      return await sales.isDisplayed().then(async (salesAreVisible) => {
        const message = await sales.findElement(By.css('.sales-summary'))
        expect(salesAreVisible).toBe(true)
        const validMessage = /^[A-Za-z\s]+ of [A-Za-z\s]+ has purchased \d+ widgets/
        expect(await message.getText()).toMatch(validMessage)
        return true
      })
    }, 5000)
  })
});
