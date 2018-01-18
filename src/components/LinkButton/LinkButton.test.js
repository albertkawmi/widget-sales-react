/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LinkButton from './LinkButton.component'

Enzyme.configure({ adapter: new Adapter() })

describe('<LinkButton />', () => {
  const button = Enzyme.shallow(
    <LinkButton to="/amazing/page" />
  )

  it('renders a help message for mobile users', () => {
    expect(button).toMatchSnapshot()
  })
})
