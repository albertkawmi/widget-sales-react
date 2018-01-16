import { By, until } from 'selenium-webdriver'
import { defaultTimeout, driver, load, rootEl } from '../helpers'

beforeAll(async () => {
  await load('clients')
})

describe('Clients Page', () => {
  it('has the correct header', async () => {
    const heading = await rootEl()
      .findElement(By.css('.page-heading'))

    expect(await heading.getText()).toBe('Clients')
  })

  it('renders the table header row', async () => {
    const headerRows = await rootEl()
      .findElements(By.css('.clients-table > thead > tr'))

    expect(headerRows.length).toBe(1)
  })

  it('renders rows for ten clients', async () => {
    const bodyRow = By.css('.clients-table > tbody > tr')

    await driver.wait(
      until.elementsLocated(bodyRow),
      defaultTimeout
    )

    const rows = await rootEl().findElements(bodyRow)

    expect(rows.length).toBe(10)
  })

  it('shows a summary of sales when a client is selected', async () => {
    const salesSummary = By.css('.sales-summary')
    const initialMessage = await rootEl()
      .findElement(salesSummary)
      .getText()

    expect(initialMessage).toBe('Select a client above to view their purchases.')

    await driver.wait(
      until.elementsLocated(By.css('.clients-table > tbody > tr')),
      defaultTimeout
    )

    await rootEl()
      .findElement(By.css('.select-client-btn'))
      .click()

    const salesMessagePattern = /^[A-Za-z\s]+ of [A-Za-z\s]+ has purchased \d+ widgets/

    await driver.wait(
      until.elementTextMatches(
        await rootEl().findElement(salesSummary),
        salesMessagePattern
      ),
      defaultTimeout
    )
  })
})
