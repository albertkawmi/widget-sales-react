/* eslint-env jest */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Clients from './Clients.route'

Enzyme.configure({ adapter: new Adapter() });

const clientsRoute = Enzyme.shallow(
  <Router>
    <Clients />
  </Router>
)

describe('<Clients />', () => {
  it('renders without crashing', () => {
    expect(clientsRoute).toBeTruthy()
  })

  it('has not been changed unintentionally', () => {
    expect(clientsRoute).toMatchSnapshot()
  })
})
