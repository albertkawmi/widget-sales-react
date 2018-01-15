/* eslint-env jest */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Fault from './Fault.route'

Enzyme.configure({ adapter: new Adapter() });

const faultRoute = Enzyme.shallow(
  <Router>
    <Fault />
  </Router>
)

describe('<Fault />', () => {
  it('renders without crashing', () => {
    expect(faultRoute).toBeTruthy()
  })

  it('has not been changed unintentionally', () => {
    expect(faultRoute).toMatchSnapshot()
  })
})
