/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import SalesTable from './SalesTable.component'
import salesData from '../../../mocks/sales.json'

Enzyme.configure({ adapter: new Adapter() });

const wrapper = Enzyme.shallow(<SalesTable sales={salesData} />)

describe('<SalesTable />', () => {
  it('renders sales data in a table', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
