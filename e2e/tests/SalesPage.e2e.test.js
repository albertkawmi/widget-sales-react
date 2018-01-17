import { By, until } from 'selenium-webdriver'
import { defaultTimeout, driver, load, rootEl } from '../driver'

beforeAll(async () => {
  await load('sales')
})

describe('Sales Page', () => {
  it('has the correct header', async () => {
    const pageHeading = await rootEl()
      .findElement(By.css('.page-heading'))

    const text = await pageHeading.getText()
    expect(text).toBe('All Sales')
  })

  it('renders the table header row', async () => {
    const headerRows = await rootEl()
      .findElements(By.css('.sales-table > thead > tr'))

    expect(headerRows.length).toBe(1)
  })

  it('renders the table body', async () => {
    const bodyRow = By.css('.sales-table > tbody > tr')

    await driver.wait(
      until.elementsLocated(bodyRow),
      defaultTimeout
    )

    const rows = await rootEl().findElements(bodyRow)

    expect(rows.length).toBeGreaterThan(0)
  })
})
