import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "./Row";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi clever programmer , let's build netflix clone today</h1>
        <Row title="NETFLIX ORIGINALS"/>
        <Row title="Trending now"/>
    </div>
  );
}

export default App;
