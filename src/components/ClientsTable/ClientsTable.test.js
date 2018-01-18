/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ClientsTable from './ClientsTable.component'
import ClientRow from './ClientRow.component'
import clientsData from '../../../mocks/clients.json'

Enzyme.configure({ adapter: new Adapter() })

describe('<ClientsTable />', () => {
  it('renders a spinner if it has no data', () => {
    const table = Enzyme.shallow(<ClientsTable clients={[]} />)
    expect(
      table.find('Spinner').exists()
    ).toBe(true)
  })

  it('renders clients data in a table', () => {
    const table = Enzyme.shallow(<ClientsTable clients={clientsData} />)
    expect(table).toMatchSnapshot()
  })

  it('highlights the selected row', () => {
    const table = Enzyme.shallow(
      <ClientsTable clients={clientsData} selectedId={3} />
    )

    const selectedRows = table.findWhere(
      row => row.prop('isSelected') === true
    )

    expect(selectedRows.length).toBe(1)
  })

  it('it does not highlight any row if there is no matching id', () => {
    const table = Enzyme.shallow(
      // clients.json contains 10 rows, so selectedId 11 will not match
      <ClientsTable clients={clientsData} selectedId={11} />
    )
    expect(
      table.findWhere(row => row.prop('isSelected') === true).length
    ).toBe(0)
  })

  it('has a link to select each row', () => {
    const row = Enzyme.shallow(
      <ClientRow isSelected={false} {...clientsData[0]} />
    )
    expect(
      row.find('LinkButton').prop('to')
    ).toBe('/clients/1')
  })

  it('renders even if clients prop is undefined', () => {
    expect(
      Enzyme.shallow(<ClientsTable />)
    ).toBeTruthy()
  })
})
