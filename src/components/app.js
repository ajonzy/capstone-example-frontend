import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import Nav from "./nav"
import Home from "./pages/home"
import Items from "./pages/items"
import AddItem from "./pages/add-item"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/items" component={Items} />
          <Route path="/add-item" component={AddItem} />
        </Switch>
      </div>
    );
  }
}
