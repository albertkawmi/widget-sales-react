import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => (
  <div className="home">
    <h2>Welcome</h2>
    <p>What would you like to do?</p>
    <Link to="/clients">
      <button className="mr">View all your Clients</button>
    </Link>
    <Link to="/sales">
      <button className="mr">View all your Sales</button>
    </Link>
    <Link to="/fault">
      <button>Actually, I'd like to see an error page instead</button>
    </Link>
  </div>
)
