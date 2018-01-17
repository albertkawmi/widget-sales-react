/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import SalesTable from './SalesTable.component'
import salesData from '../../../mocks/sales.json'

Enzyme.configure({ adapter: new Adapter() });

describe('<SalesTable />', () => {
  it('renders a spinner if it has no data', () => {
    const table = Enzyme.shallow(<SalesTable sales={[]} />)
    expect(
      table.find('Spinner').exists()
    ).toBe(true)
  })

  it('renders sales data in a table', () => {
    const table = Enzyme.shallow(
      <SalesTable sales={salesData} />
    )
    expect(table).toMatchSnapshot()
  })

  it('renders even if clients prop is undefined', () => {
    expect(
      Enzyme.shallow(<SalesTable />)
    ).toBeTruthy()
  })
})
