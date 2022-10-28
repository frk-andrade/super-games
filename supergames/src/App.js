import './App.css';
import './reset.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import StarWars from './components/StarWars';
import Consoles from './components/Consoles';
import Diversos from './components/Diversos/Diversos';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <StarWars />
      <Consoles />
      <Diversos />
    </div>
  );
}

export default App;
