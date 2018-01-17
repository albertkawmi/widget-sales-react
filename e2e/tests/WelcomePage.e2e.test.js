import { load, driver } from '../driver'

describe('Welcome Page', () => {
  it('has the correct page title', async () => {
    await load()
    expect(await driver.getTitle()).toBe('WidgetSales')
  })
})
