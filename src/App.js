import React, { Component } from 'react'
import Store from './components/Store'

import {
  BrowserRouter as Router,
  Link,
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
  <div>
    <Header />

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
  </footer>
)

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to={`/clients`}>
          Clients
        </Link>
      </li>
      <li>
        <Link to={`/sales`}>
          Sales
        </Link>
      </li>
      <li>
        <Link to={`/fault`}>
          Fault
        </Link>
      </li>
    </ul>
  </nav>
)

export default App;
