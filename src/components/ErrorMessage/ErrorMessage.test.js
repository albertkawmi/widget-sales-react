/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import ErrorMessage from './ErrorMessage.component'

Enzyme.configure({ adapter: new Adapter() });

describe('<ErrorMessage />', () => {
  it('renders an error message if present', () => {
    const context = { error: 'An error message' }
    const wrapper = Enzyme.shallow(<ErrorMessage />, { context })
    expect(wrapper.text()).toMatch(context.error)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders nothing if there is no error', () => {
    const context = { error: '' }
    const wrapper = Enzyme.shallow(<ErrorMessage />, { context })
    expect(wrapper.text()).toBe('')
  })
})
