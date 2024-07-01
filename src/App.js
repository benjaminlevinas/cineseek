import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
      </div>
    );
  }
  
  }
  
export default App;
