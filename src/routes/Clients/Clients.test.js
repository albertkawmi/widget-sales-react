/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Clients from './Clients.route'
import Store from '../../components/Store'

Enzyme.configure({ adapter: new Adapter() })

const store = Enzyme.shallow(<Store />)
const defaultContext = store.instance().getChildContext()

const mockStoreContext = (options = {}) => ({
  ...defaultContext,
  fetchClients: jest.fn(),
  fetchSales: jest.fn(),
  fetchFault: jest.fn(),
  dismissError: jest.fn(),
  ...options
})

describe('<Clients />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('calls fetchClients if no existing clients data', () => {
    const context = mockStoreContext()

    expect(
      Enzyme.shallow(
        <Clients match={{ params: {} }} />,
        { context }
      )
    ).toMatchSnapshot()

    expect(context.fetchClients).toHaveBeenCalled()
  })

  it('does not call fetchClients if there is any existing clients data', () => {
    const context = mockStoreContext({ clients: [{ id: 1 }] })

    expect(
      Enzyme.shallow(
        <Clients match={{ params: {} }} />,
        { context }
      )
    ).toMatchSnapshot()

    expect(context.fetchClients).not.toHaveBeenCalled()
  })

  it('calls fetchSales if no existing sales data and there is a :clientId route param', () => {
    const context = mockStoreContext({ clients: [{ id: 1 }] })

    expect(
      Enzyme.shallow(
        <Clients match={{ params: { clientId: 1 } }} />,
        { context }
      )
    ).toMatchSnapshot()

    expect(context.fetchSales).toHaveBeenCalled()
  })

  it('does not call fetchSales if there is any existing sales data', () => {
    const context = mockStoreContext({
      clients: [{ id: 1 }],
      sales: [{ id: 42 }]
    })

    expect(
      Enzyme.shallow(
        <Clients match={{ params: { clientId: 1 } }} />,
        { context }
      )
    ).toMatchSnapshot()

    expect(context.fetchSales).not.toHaveBeenCalled()
  })

  it('calls fetchDataIfNeeded on componentWillMount', () => {
    const context = mockStoreContext({ clients: [{ id: 1 }] })

    const instance = Enzyme.shallow(
      <Clients match={{ params: { clientId: 1 } }} />,
      { context }
    ).instance()

    const spy = jest.spyOn(instance, 'fetchDataIfNeeded')
    instance.componentWillMount({ match: { params: { clientId: 2 } } })
    expect(spy).toHaveBeenCalled()
  })

  it('calls fetchDataIfNeeded on componentDidUpdate if clientId changed', () => {
    const context = mockStoreContext({ clients: [{ id: 1 }] })

    const instance = Enzyme.shallow(
      <Clients match={{ params: { clientId: 1 } }} />,
      { context }
    ).instance()

    const spy = jest.spyOn(instance, 'fetchDataIfNeeded')
    instance.componentDidUpdate({ match: { params: { clientId: 2 } } })
    expect(spy).toHaveBeenCalled()
  })

  it('does not fetchDataIfNeeded on componentDidUpdate if clientId has not changed', () => {
    const context = mockStoreContext({ clients: [{ id: 1 }] })

    const instance = Enzyme.shallow(
      <Clients match={{ params: { clientId: 1 } }} />,
      { context }
    ).instance()

    const spy = jest.spyOn(instance, 'fetchDataIfNeeded')
    instance.componentDidUpdate({ match: { params: { clientId: 1 } } })
    expect(spy).not.toHaveBeenCalled()
  })
})
