import React, { Component } from "react";

import UserList from "./userList";
import FavoriteList from "./favoriteList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

export default class App extends Component {
  state = {
    list: [],
    favorites: []
  };

  addFavorite = favorite => {
    const { favorites } = this.state;

    if (!favorites.some(alreadyFavorite => alreadyFavorite.id == favorite.id)) {
      this.setState({
        favorites: [...this.state.favorites, favorite]
      });
    }
  };

  getList = async () => {
    const api =
      "https://jsonplaceholder.typicode.com/posts";

    await axios
      .get(api)
      .then(response => {
        this.setState({
          list: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getList();
    
  }

 

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <UserList list={this.state.list} addFavorite={this.addFavorite} />
            )}
          />
          <Route
            path="/favorites"
            render={() => <FavoriteList favorites={this.state.favorites} />}
          />
        </Switch>
      </Router>
    );
  }
}
