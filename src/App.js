import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <NavBar />
          <Gallery />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
