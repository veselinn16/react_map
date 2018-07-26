import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';
import Sidebar from './components/Sidebar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar/>
        <Map />       
      </div>
    );
  }
}

export default App;
