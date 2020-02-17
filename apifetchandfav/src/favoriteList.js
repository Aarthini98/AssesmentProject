import React from "react";

import NavLinks from "./components/navLink";

export default class FavoriteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  removeFavoritee = favorite => {
    const { favorites } = this.props;
      this.setState({ favorites: this.favorites.filter(favorite => favorites.userid !== favorite)});
    
  };
  removeFavorite(e) {
    // var FavoriteList = this.props; // make a separate copy of the array
    const { favorites } = this.props;
    var index = e;
    
      favorites.splice(index, 1);
      // this.setState({favorites:FavoriteList});
      window.location.reload();
  }


  render() {
    const { favorites } = this.props;
    return (
      <div>
        <NavLinks />
        <ul>
          {favorites.map(user => {
            return (
                <li key={user}>
              

                <div className="userInfo">
                      <p>USER ID : {user.userId}</p>
                      <p>ID: {user.id} pages</p>
                      <p>TITLE: {user.title}</p>
                      <p>BODY: {user.body}</p>
                    </div>
                    <button onClick={(event) => this.removeFavorite(event, user)}>
                      Delete
                    </button>
                  </li>
            );
          })}
        </ul>
       
      </div>
    );
  }
}
