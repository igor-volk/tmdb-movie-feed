import React from 'react';
import './styles/App.css';

import MovieFeed from './components/MovieFeed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Movie Feed
      </header>
      <MovieFeed/>
    </div>
  );
}

export default App;
