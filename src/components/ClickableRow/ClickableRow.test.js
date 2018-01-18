/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ClickableRow from './ClickableRow.component'

Enzyme.configure({ adapter: new Adapter() })

describe('<ClickableRow />', () => {
  it('renders a Redirect once table row is clicked', () => {
    const props = {
      to: '/another/page',
      isClickable: true,
    }

    const wrapper = Enzyme.shallow(
      <ClickableRow {...props} />
    )

    const clickableTr = wrapper.find('tr.clickable-row--true')

    expect(
      clickableTr.length
    ).toBe(1)

    clickableTr.simulate('click')

    const redirect = wrapper.find('Redirect')

    expect(
      redirect.length
    ).toBe(1)

    expect(redirect.prop('to')).toBe(props.to)
  })

  it('can render a non-clickable table row', () => {
    const props = {
      to: '/another/page',
      isClickable: false,
    }

    const wrapper = Enzyme.shallow(
      <ClickableRow {...props} />
    )

    const notClickableTr = wrapper.find('tr.clickable-row--false')

    expect(
      notClickableTr.length
    ).toBe(1)

    notClickableTr.simulate('click')

    expect(
      wrapper.find('Redirect').length
    ).toBe(0)
  })
})
