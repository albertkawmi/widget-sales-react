import api from './api'

const mockErrorMsg = 'Something went wrong'
const mockError = new Error(mockErrorMsg)
const mockApiError = {
  ok: false,
  statusText: mockErrorMsg
}

const mockApiData = ['usually an array']

const mockApiResponse = {
  ok: true,
  json: () => Promise.resolve(mockApiData)
}

const mockFetch = url => {
  const salesOrClients =
    /\/sales$/.test(url) ||
    /\/clients$/.test(url)

  if (salesOrClients) return Promise.resolve(mockApiResponse)
  return Promise.resolve(mockApiError)
}

const fetchSpy = jest.spyOn(global, 'fetch')
  .mockImplementation(mockFetch)

beforeEach(() => {
  jest.clearAllMocks()
})

afterEach(() => {
  // app uses default API URL if REACT_APP_API_URL is not defined
  delete process.env.REACT_APP_API_URL
})

describe('api.get', () => {
  it('uses the REACT_APP_API_URL environment variable if available', () => {
    process.env.REACT_APP_API_URL = 'https://a.test.url'
    return api.get('clients')
    .then(() => {
        expect(fetchSpy).toHaveBeenCalledWith(
          'https://a.test.url/clients'
        )
      })
  })

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
