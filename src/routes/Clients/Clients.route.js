import React from 'react'
import api from '../../utils/api'
import ClientsTable from '../../components/ClientsTable'
import SalesTable from '../../components/SalesTable'
import Store from '../../components/Store'

export class Clients extends React.Component {
  state = {
    isLoading: false,
    error: null,
  }

  componentWillMount() {
    this.fetchDataIfNeeded()
  }

  componentDidUpdate(prevProps) {
    this.updateDataOnRouteChange(prevProps)
  }

  updateDataOnRouteChange = (prevProps) => {
    const prevClientId = prevProps.match.params.clientId
    const { clientId } = this.props.match.params
    if (clientId !== prevClientId) this.fetchDataIfNeeded()
  }

  fetchDataIfNeeded = () => {
    if (this.state.isLoading) return

    const { clients, sales } = this.context
    const { clientId } = this.props.match.params

    const shouldFetchClients = !clients.length
    const shouldFetchSales = clientId && !sales.length

    if (shouldFetchClients) this.request('clients')
    if (shouldFetchSales) this.request('sales')
  }

  request = endpoint => {
    if (this.state.isLoading) return

    this.setState({ isLoading: true }, () => {
      api.get(endpoint)
        .then(results => {
          this.setState({
            isLoading: false,
            error: null
          })
          this.context.set(endpoint, results)
        })
        .catch(error => this.setState({
          error,
          isLoading: false
        }))
    })
  }

  render() {
    const { sales, clients } = this.context
    const { match: { params: { clientId } } } = this.props
    const selectedId = Number(clientId)

    const selectedClientIsValid = Boolean(clientId) &&
      clients.some(({ id }) => id === selectedId)

    const filteredSales = selectedClientIsValid &&
      sales.filter(sale => sale.clientId === selectedId)

    return (
      <div>
        <h2>Clients</h2>
        <ClientsTable
          clients={this.context.clients || []}
          selectedId={selectedId}
        />

        {selectedClientIsValid && <h2>Sales for Client No. {clientId}</h2>}

        {selectedClientIsValid && <SalesTable sales={filteredSales} />}
      </div>
    )
  }
}

Clients.contextTypes = Store.childContextTypes
