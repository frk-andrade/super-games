import './App.css';
import './reset.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import StarWars from './components/StarWars';
import Consoles from './components/Consoles';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <StarWars />
      <Consoles />
    </div>
  );
}

export default App;
