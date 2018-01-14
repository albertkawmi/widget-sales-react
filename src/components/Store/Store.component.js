import React from 'react'
import PropTypes from 'prop-types'
import api from '../../utils/api'

export default class Store extends React.Component {
  state = {
    clients: [],
    sales: [],
    errors: [],
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
          isLoading: false,
          errors: [error, ...this.state.errors],
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
  errors: PropTypes.array,
  fetchClients: PropTypes.func,
  fetchSales: PropTypes.func,
  fetchFault: PropTypes.func
}
