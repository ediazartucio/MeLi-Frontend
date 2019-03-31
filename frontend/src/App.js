import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Search from './Search/Search.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Search} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
