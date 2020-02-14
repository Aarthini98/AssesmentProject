import React from "react";

import NavLinks from "./components/navLink";

export default class UserList extends React.Component {
  render() {
    let style = {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      padding: "1rem",
      gridGap: "1rem 1rem"
    };

    return (
      <div>
        <NavLinks />
        <ul style={style}>
          {this.props.list.map(user => {
            return (
              <li key={user}>
              

            <div className="userInfo">
                  <p>USER ID : {user.userId}</p>
                  <p>ID: {user.id} pages</p>
                  <p>TITLE: {user.title}</p>
                  <p>BODY: {user.body}</p>
                </div>
                <button onClick={() => this.props.addFavorite(user)}>
                  Add to Favorites
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
