/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Spinner from './Spinner.component'

Enzyme.configure({ adapter: new Adapter() })

describe('<Spinner />', () => {
  it('renders a spinner', () => {
    const spinner = Enzyme.shallow(
      <Spinner />
    )
    expect(spinner).toMatchSnapshot()
  })
})
