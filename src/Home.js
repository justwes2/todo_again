import React, { Component } from 'react'
import Add from './Add'

import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>Todo React</h1>
        <Add />
      </div>
    );
  }
}

export default Home;
