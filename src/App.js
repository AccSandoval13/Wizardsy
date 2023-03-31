//Import data to make sure all components are connected
import NavBar from './components/NavBar';
import Gallery from './components/gallery';
import Post from './components/post';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div>
      <NavBar/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
