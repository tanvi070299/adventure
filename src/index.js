
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import React, { Component } from 'react'
import Page from 'react-page-loading'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="root">
        <Page loader={"bar"} color={"#3348FF"} size={30} >
        <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
        </Page>
      </div>
    )
  }
}
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );