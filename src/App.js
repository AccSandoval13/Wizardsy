//Import data to make sure all components are connected
import logo from './wizard-hat.png'

import NavBar from './components/NavBar';
import Gallery from './components/gallery';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="left_header">
          <img src={logo} alt="https://www.flaticon.com/free-icons/wizard-hat" title="Wizardsy Logo" />
          <NavBar/>
        </div>
        <Gallery/>
      </div>
    </div>
  );
}

export default App;