/* eslint-env jest */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import NotFound from './NotFound.route'

Enzyme.configure({ adapter: new Adapter() });

const notFoundRoute = Enzyme.shallow(
  <Router>
    <NotFound />
  </Router>
)

describe('<NotFound />', () => {
  it('renders without crashing', () => {
    expect(notFoundRoute).toBeTruthy()
  })

  it('has not been changed unintentionally', () => {
    expect(notFoundRoute).toMatchSnapshot()
  })
})
