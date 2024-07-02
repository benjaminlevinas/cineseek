import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TrendingMovies from './components/TrendingMovies';
import PlayingNow from './components/PlayingNow';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <TrendingMovies />
        <PlayingNow />
      </div>
    );
  }
  
  }
  
export default App;
