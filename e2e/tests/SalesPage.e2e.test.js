import { load, find, first } from '../helpers';

beforeAll(async () => {
  await load('sales')
})

describe('Sales Page', () => {
  it('has the correct header', async () => {
    const text = await first('h2').then(h2 => h2.getText())
    expect(text).toBe('All Sales')
  });

  it('renders the table header row', async () => {
    const headerRows = await find('thead > tr')
    expect(headerRows.length).toBe(1)
  })

  it('renders the table body', async () => {
    const bodyRows = await find('tbody > tr')
    expect(bodyRows.length).toBeGreaterThan(0)
  })
});
