/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound.route'

Enzyme.configure({ adapter: new Adapter() })

const wrapper = Enzyme.shallow(<NotFound />)

describe('<NotFound />', () => {
  it('renders a 404 page', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
