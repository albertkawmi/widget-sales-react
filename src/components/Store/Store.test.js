/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Store from './'
import api from '../../utils/api'

Enzyme.configure({ adapter: new Adapter() })

// Mock API module
const mockApiData = ['usually an array']
const mockApiError = new Error('A mock API error')

const mockApiGet = () => Promise.resolve(mockApiData)
const mockApiGetError = () => Promise.reject(mockApiError)

let apiGet
let store
let instance
let context
let requestSpy
let setStateSpy

beforeEach(() => {
  apiGet = jest.spyOn(api, 'get')
    .mockImplementation(mockApiGet)

  store = Enzyme.shallow(
    <Store>
      <h1>Child 1</h1>
      <p>Child 2</p>
    </Store>
  )
  instance = store.instance()
  context = instance.getChildContext()
  requestSpy = jest.spyOn(instance, 'request')
  setStateSpy = jest.spyOn(instance, 'setState')
})

describe('<Store />', () => {

  it('should render only its children', () => {
    expect(instance.render()).toEqual(instance.props.children)
  })

  it('should expose its state in getChildContext', () => {
    expect(instance.getChildContext()).toMatchObject(instance.state)
  })

  it('should expose a function to request clients', () => {
    context.fetchClients()
    expect(requestSpy).toHaveBeenCalledWith('clients')
  })

  it('should expose a function to request sales', () => {
    context.fetchSales()
    expect(requestSpy).toHaveBeenCalledWith('sales')
  })

  it('should expose a function to request a fault', () => {
    context.fetchFault()
    expect(requestSpy).toHaveBeenCalledWith('fault')
  })

  it('should expose a function to dismiss an error message', () => {
    context.dismissError()
    expect(setStateSpy).toHaveBeenCalledWith({ error: '' })
  })
})

describe('store.request', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should call api.get with the correct endpoint', () => {
    instance.request('clients')
    expect(apiGet).toHaveBeenCalledWith('clients')
  })

  it('on success, it calls setState with the results', () => {
    return instance.request('clients')
      .then(() => {
        expect(setStateSpy).toHaveBeenCalledWith(
          expect.objectContaining({ clients: mockApiData })
        )
      })
  })

  it('should set the error message state on failure', () => {
    apiGet = jest.spyOn(api, 'get')
      .mockImplementation(mockApiGetError)

    return instance.request('clients', { mockError: true })
      .then(() => {
        expect(setStateSpy).toHaveBeenCalledWith(
          expect.objectContaining({ error: mockApiError.toString() })
        )
      })
  })
})