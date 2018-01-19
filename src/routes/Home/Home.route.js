import React from 'react'
import LinkButton from '../../components/LinkButton'

const Home = () => (
  <div className="home">
    <section className="homepage-box">
      <h2 className="page-heading page-heading--homepage">Welcome</h2>
      <p>What would you like to do?</p>
      <LinkButton
        to="/clients"
        text="View all your Clients"
        buttonClassName="homepage-btn"
      />
      <LinkButton
        to="/sales"
        text="View all your Sales"
        buttonClassName="homepage-btn"
      />
      <LinkButton
        to="/fault"
        text="Actually, I'd like to see an error page instead"
        buttonClassName="homepage-btn"
      />
    </section>
  </div>
)

export default Home
