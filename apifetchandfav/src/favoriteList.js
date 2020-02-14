import React from "react";

import NavLinks from "./components/navLink";

export default class FavoriteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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
                    <button >
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
