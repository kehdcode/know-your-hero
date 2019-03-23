import React, { Component } from 'react';
import SelectCategory from './components/SelectCategory'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2>Know Your Heros</h2>
       </header>
       <SelectCategory />
      </div>
    );
  }
}

export default App;
