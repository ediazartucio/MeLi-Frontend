import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SearchBar from './Searchbar/Search.js';
import ItemList from './ItemList/ItemList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <SearchBar />
        <Switch>
          <Route path="/items" component={ItemList} />
          {/*<Route path="/items/:id" />*/}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
