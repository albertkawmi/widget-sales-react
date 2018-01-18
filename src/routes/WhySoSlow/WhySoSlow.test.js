/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WhySoSlow from './WhySoSlow.route'

Enzyme.configure({ adapter: new Adapter() })

const wrapper = Enzyme.shallow(<WhySoSlow />)

describe('<WhySoSlow />', () => {
  it('renders the Why So Slow? page', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
