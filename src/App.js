//Import data to make sure all components are connected

import NavBar from './components/NavBar';
import Gallery from './components/gallery';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
          <NavBar/>
          <Gallery/>
      </div>
    </div>
  );
}

export default App;