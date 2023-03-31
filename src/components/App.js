//Import data to make sure all components are connected
import NavBar from './NavBar';
import Gallery from './gallery';
import Post from './post';
import Footer from './footer';
import './App.css';

function App() {
  return (
    <div>
      <NavBar/>
      <Gallery/>
      <Footer/>
      <div className="App">
        {}
      </div>
    </div>
  );
}

export default App;
