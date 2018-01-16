import api from './api'

const mockErrorMsg = 'Something went wrong'
const mockError = new Error(mockErrorMsg)
const mockApiData = ['usually an array']

const mockApiResponse = {
  ok: true,
  json: () => Promise.resolve(mockApiData)
}

const mockApiError = {
  ok: false,
  statusText: mockErrorMsg
}

const clientsRoute = 'https://widget-sales-api.now.sh/clients'
const salesRoute = 'https://widget-sales-api.now.sh/sales'
const faultRoute = 'https://widget-sales-api.now.sh/fault'

const mockFetch = url => {
  switch (url) {
    case clientsRoute:
    case salesRoute:
      return Promise.resolve(mockApiResponse)
    case faultRoute:
    default:
      return Promise.resolve(mockApiError)
  }
}

const fetchSpy = jest.spyOn(global, 'fetch')
  .mockImplementation(mockFetch)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('api.get', () => {
  it('calls fetch on the clients endpoint', () => {
    return api.get('clients')
      .then(() => {
        expect(fetchSpy).toHaveBeenCalledWith(
          'https://widget-sales-api.now.sh/clients'
        )
      })
  })

  it('calls fetch on the sales endpoint', () => {
    return api.get('sales')
      .then(() => {
        expect(fetchSpy).toHaveBeenCalledWith(
          'https://widget-sales-api.now.sh/sales'
        )
      })
  })

  it('calls fetch on the fault endpoint', () => {
    return api.get('fault')
      .catch((error) => {
        expect(fetchSpy).toHaveBeenCalledWith(
          'https://widget-sales-api.now.sh/fault'
        )
        expect(error).toEqual(mockError)
      })
  })

  it('throws for invalid endpoints', () => {
    return api.get('not/an/endpoint')
      .catch((error) => {
        expect(fetchSpy).not.toHaveBeenCalled()
        expect(error).toMatchSnapshot()
      })
  })
})
