/* eslint-env jest */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Sales from './Sales.route'

Enzyme.configure({ adapter: new Adapter() });

const salesRoute = Enzyme.shallow(
  <Router>
    <Sales />
  </Router>
)

describe('<Sales />', () => {
  it('renders without crashing', () => {
    expect(salesRoute).toBeTruthy()
  })

  it('has not been changed unintentionally', () => {
    expect(salesRoute).toMatchSnapshot()
  })
})
