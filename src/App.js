import './App.css';
import Nav from './components/Nav.js';
import Star from "./components/stars-bg.jpg"
import GameControl from "./components/GameControl"
import TestGameTemplate from './components/TestGameTemplate';
import TestControls from './components/TestControls';

function App() {
  const bodyStyle = {
    backgroundImage: `url(${Star})`,
  }
  
  let navTabs = ["Home", "About"]
  let navKeys = ["1", "2"]

  return (
    <div className="App">
      <Nav pages={navTabs} key={navKeys}/>
      <TestControls />
    </div>
  );
}

export default App;
