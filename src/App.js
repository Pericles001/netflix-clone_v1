import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "./Row";
import Requests from "./requests";
import './App.css';
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hi clever programmer , let's build netflix clone today</h1>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Trending now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
