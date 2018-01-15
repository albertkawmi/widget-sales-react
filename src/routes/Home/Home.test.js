/* eslint-env jest */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home.route'

Enzyme.configure({ adapter: new Adapter() });

const homeRoute = Enzyme.shallow(
  <Router>
    <Home />
  </Router>
)

describe('<Home />', () => {
  it('renders without crashing', () => {
    expect(homeRoute).toBeTruthy()
  })

  it('has not been changed unintentionally', () => {
    expect(homeRoute).toMatchSnapshot()
  })
})
