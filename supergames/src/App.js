import './App.css';
import './reset.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import StarWars from './components/StarWars';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <StarWars />
    </div>
  );
}

export default App;
