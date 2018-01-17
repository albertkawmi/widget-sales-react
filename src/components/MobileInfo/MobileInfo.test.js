/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import MobileInfo from './MobileInfo.component'

Enzyme.configure({ adapter: new Adapter() });

describe('<MobileInfo />', () => {
  const mobileInfo = Enzyme.shallow(
    <MobileInfo />
  )

  it('renders a help message for mobile users', () => {
    expect(mobileInfo).toMatchSnapshot()
  })

  it('hides when dismissed', () => {
    expect(
      mobileInfo.find('.mobile-info.dismissed').exists()
    ).toBe(false)

    mobileInfo.find('.mobile-info__dismiss')
      .simulate('click')

    expect(
      mobileInfo.find('.mobile-info.dismissed').exists()
    ).toBe(true)
  })
})
