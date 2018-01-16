import { DEFAULT_API_URL } from './config'

const fetchJson = path => {
  const baseUrl = process.env.REACT_APP_API_URL || DEFAULT_API_URL
  const url = [baseUrl, path].join('')

  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    })
}

const endpoints = {
  get: {
    clients: () => fetchJson('/clients'),
    sales: () => fetchJson('/sales'),
    fault: () => fetchJson('/fault'),
  }
}

export default {
  get: endpoint => {
    if (!(endpoint in endpoints.get)) {
      return Promise.reject('api.get called with invalid endpoint')
    }
    return endpoints.get[endpoint]()
  }
  // other API methods would go here
}
