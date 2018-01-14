import React from 'react'
import PropTypes from 'prop-types'

export default class Store extends React.Component {
  state = {
    clients: [],
    sales: []
  }
  getChildContext = () => {
    const childContext = {
      ...this.state,
      set: (key, val) => this.setState({ [key]: val })
    }
    return childContext
  }
  render() {
    return this.props.children
  }
}

Store.childContextTypes = {
  clients: PropTypes.array,
  sales: PropTypes.array,
  set: PropTypes.func
}
