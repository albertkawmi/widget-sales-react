/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home.route'

Enzyme.configure({ adapter: new Adapter() })

const wrapper = Enzyme.shallow(<Home />)

describe('<Home />', () => {
  it('renders the home page', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
