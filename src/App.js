import React, { Component } from 'react'
import Store from './components/Store'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './routes/Home'
import Clients from './routes/Clients'
import Fault from './routes/Fault'
import NotFound from './routes/NotFound'
import Sales from './routes/Sales'

import Header from './components/Header'
import Footer from './components/Footer'
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

    <main className="wrap">
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

export default App;
