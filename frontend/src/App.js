import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SearchBar from './Searchbar/Search.js';
import ItemList from './ItemList/ItemList.js';
import ItemDetail from './ItemDetail/ItemDetail.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <SearchBar />
        <Switch>
          <Route exact path="/items" component={ItemList} />
          <Route exact path="/items/:itemId" component={ItemDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
