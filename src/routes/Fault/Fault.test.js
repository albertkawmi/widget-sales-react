/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Fault from './Fault.route'

Enzyme.configure({ adapter: new Adapter() })

const context = { fetchFault: jest.fn() }

const wrapper = Enzyme.shallow(<Fault />, { context })

describe('<Fault />', () => {
  it('renders A Faulty Page', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('always calls fetchFault on componentWillMount', () => {
    expect(context.fetchFault).toHaveBeenCalled()
  })
})
