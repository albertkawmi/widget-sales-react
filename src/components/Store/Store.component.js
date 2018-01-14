import React from 'react'
import PropTypes from 'prop-types'
import api from '../../utils/api'

export default class Store extends React.Component {
  state = {
    clients: [],
    sales: [],
    error: '',
    isLoading: false
  }

  getChildContext = () => {
    const childContext = {
      ...this.state,
      fetchClients: () => this.request('clients'),
      fetchSales: () => this.request('sales'),
      fetchFault: () => this.request('fault')
    }
    return childContext
  }

  request = endpoint => {
    if (this.state.isLoading) return

    this.setState({ isLoading: true }, () => {
      api.get(endpoint)
        .then(results => {
          this.setState({
            isLoading: false,
            [endpoint]: results
          })
        })
        .catch(error => this.setState({
          error: error.toString(),
          isLoading: false
        }))
    })
  }

  render() {
    return this.props.children
  }
}

Store.childContextTypes = {
  isLoading: PropTypes.bool,
  clients: PropTypes.array,
  sales: PropTypes.array,
  error: PropTypes.string,
  fetchClients: PropTypes.func,
  fetchSales: PropTypes.func,
  fetchFault: PropTypes.func
}
