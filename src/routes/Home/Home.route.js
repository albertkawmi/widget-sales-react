import React from 'react'
import { Link } from 'react-router-dom'

export const Home = ({ clients = 0, sales = 0 }) => (
  <div>
    <h2>Welcome to the WidgetSales web app.</h2>
    <Link to="/clients">
      <button>View all your Clients</button>
    </Link>
    <Link to="/sales">
      <button>View all your Sales</button>
    </Link>
    <Link to="/fault">
      <button>No thanks, I'd like to see an error page instead.</button>
    </Link>
  </div>
)
