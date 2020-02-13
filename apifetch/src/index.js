import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles.css';

function App() {
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    setBooks(response.data);
  };

  return (
    <div className="App">
      <h1>API FETCHING PROCESS</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
         Click here to Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
        {books &&
          books.map((book, index) => {
            // const cleanedDate = new Date(book.released).toDateString();
            // const authors = book.authors.join(', ');

            return (
              <div className="book" key={index}>
                <h3>DATA {index + 1}</h3>
                <div className="details">
                  <p>USER ID : {book.userId}</p>
                  <p>ID: {book.id} pages</p>
                  <p>TITLE: {book.title}</p>
                  <p>BODY: {book.body}</p>
                  <button className="fetch-button">
         ADD TO FAVORITE
        </button>
                </div>
              </div>
            );
          })}
      </div>


    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
