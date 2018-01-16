/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Sales from './Sales.route'

Enzyme.configure({ adapter: new Adapter() });

describe('<Sales />', () => {
  it('renders a sales table', () => {
    const context = {
      sales: [],
      fetchSales: jest.fn()
    }
    const wrapper = Enzyme.shallow(
      <Sales />,
      { context }
    )
    expect(
      wrapper.find('SalesTable')
    ).toBeTruthy()

    expect(wrapper).toMatchSnapshot()
  })

  it('fetches data if sales is empty', () => {
    const context = {
      sales: [],
      fetchSales: jest.fn()
    }
    Enzyme.shallow(
      <Sales />,
      { context }
    )
    expect(context.fetchSales).toHaveBeenCalled()
  })

  it('does not fetch if there are existing sales', () => {
    const context = {
      sales: [{ id: 1}],
      fetchSales: jest.fn()
    }
    Enzyme.shallow(
      <Sales />,
      { context }
    )
    expect(context.fetchSales).not.toHaveBeenCalled()
  })
})
