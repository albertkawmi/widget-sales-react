import React from 'react'
import PropTypes from 'prop-types'
import api from '../../utils/api'

export default class Store extends React.Component {
  state = {
    clients: [],
    sales: [],
    error: '',
  }

  getChildContext = () => {
    const childContext = {
      ...this.state,
      fetchClients: () => this.request('clients'),
      fetchSales: () => this.request('sales'),
      fetchFault: () => this.request('fault'),
      dismissError: () => this.setState({ error: '' })
    }
    return childContext
  }

  request = endpoint => {
    return api.get(endpoint)
      .then(results => this.setState({
        [endpoint]: results
      }))
      .catch(error => this.setState({
        error: error.toString(),
      }))
  }

  render() {
    return this.props.children
  }
}

Store.childContextTypes = {
  clients: PropTypes.array,
  sales: PropTypes.array,
  error: PropTypes.string,
  fetchClients: PropTypes.func,
  fetchSales: PropTypes.func,
  fetchFault: PropTypes.func,
  dismissError: PropTypes.func
}
