import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom'
import UserInfo from './components/UserInfo'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar'

class App extends Component {

  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={UserInfo} />
          <Route component={NoMatch} />
        </Switch>
      </>
    )
  }
}

export default App;
