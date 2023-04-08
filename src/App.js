import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';
import './App.css';
import { fetchPhotos } from './Api'; 

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const accessKey = 'jBT1siUEvaObaNq9XGu2WZNPssmEY8z0zjkdaCk61bA';
    fetchPhotos(accessKey).then((data) => {
      setPhotos(data);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <NavBar />
          <Gallery photos={photos} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
