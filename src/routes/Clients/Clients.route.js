import React from 'react'
import ClientsTable from '../../components/ClientsTable'
import Store from '../../components/Store'

export class Clients extends React.Component {
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
    if (this.context.isLoading) return

    const { clients, sales, fetchClients, fetchSales } = this.context
    const { clientId } = this.props.match.params

    const shouldFetchClients = !clients.length
    const shouldFetchSales = clientId && !sales.length

    if (shouldFetchClients) fetchClients()
    if (shouldFetchSales) fetchSales()
  }

  render() {
    const { sales, clients } = this.context
    const { match: { params: { clientId } } } = this.props
    const selectedId = Number(clientId)

    const selectedClient= Boolean(clientId) &&
      clients.find(({ id }) => id === selectedId)

    const filteredSales = selectedClient &&
      sales.filter(sale => sale.clientId === selectedId)

    return (
      <div>
        <h2>Clients</h2>
        <ClientsTable
          clients={this.context.clients || []}
          selectedId={selectedId}
        />

        <div className="sales">
          {!selectedClient && <h3>Select a client above to view their purchases.</h3>}
          {selectedClient && <SalesHeading client={selectedClient} sales={filteredSales}/>}
          {selectedClient && <SalesCards sales={filteredSales} />}
        </div>
      </div>
    )
  }
}

const SalesHeading = ({
  client: { firstName, lastName, company },
  sales
}) => (
  <h3><strong>{firstName} {lastName}</strong> of <strong>{company}</strong> has purchased <strong>{sales.length}</strong> widgets</h3>
)

const SalesCards = ({ sales }) => (
  <ul className="sale-cards">
    {sales.map(
      sale => (
        <li className="sale-card" key={sale.id}>
          <strong>Sale ID: {sale.id}</strong><br />
          {sale.productName} ({sale.size})
        </li>
      )
    )}
  </ul>
)

Clients.contextTypes = Store.childContextTypes
