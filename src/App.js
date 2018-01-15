import React, { Component } from 'react'
import Store from './components/Store'
import logo from './images/logo.png'

import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'

import {
  Home,
  Clients,
  Fault,
  NotFound,
  Sales,
} from './routes'

import ErrorMessage from './components/ErrorMessage'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Store>
          <Page />
        </Store>
      </Router>
    );
  }
}

const Page = () => (
  <div className="page">
    <Header />

    <ErrorMessage />

    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/clients/:clientId?" component={Clients} />
        <Route path="/sales" component={Sales} />
        <Route path="/fault" component={Fault} />
        <Route component={NotFound} />
      </Switch>
    </main>

    <Footer />
  </div>
)

const Header = () => (
  <header>
    <img className="logo" src={logo} alt="WidgetSales Logo"/>
    <Link to="/">
      <h1>WidgetSales</h1>
    </Link>
    <Nav />
  </header>
)

const Footer = () => (
  <footer>
    <h6>
      WidgetSales on GitHub:&nbsp;
      <a href="https://github.com/albertkawmi/widget-sales-react">widget-sales-react</a>
      &nbsp;|&nbsp;
      <a href="https://github.com/albertkawmi/widget-sales-api">widget-sales-api</a>
    </h6>
    <h6>
      <a href="#top">Top of page ⬆︎</a>
    </h6>
  </footer>
)

const Nav = () => (
  <nav>
    <StyledNavLink to="/clients">
      Clients
    </StyledNavLink>
    <StyledNavLink to="/sales">
      Sales
    </StyledNavLink>
    <StyledNavLink to="/fault">
      Fault
    </StyledNavLink>
  </nav>
)

const StyledNavLink = (props) => (
  <NavLink
    className="nav-link"
    activeClassName="nav-link__active"
    {...props}
  />
)

export default App;
