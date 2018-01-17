import React from 'react'
import LinkButton from '../../components/LinkButton'

const Home = () => (
  <div className="home">
    <h2 className="page-heading">Welcome</h2>
    <p>What would you like to do?</p>
    <LinkButton
      to="/clients"
      text="View all your Clients"
      buttonClassName="mr mt"
    />
    <LinkButton
      to="/sales"
      text="View all your Sales"
      buttonClassName="mr mt"
    />
    <LinkButton
      to="/fault"
      text="Actually, I'd like to see an error page instead"
      buttonClassName="mr mt"
    />
  </div>
)

export default Home
