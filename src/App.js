import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <SideBar/>
    <NavBar/>
    <Home/>
    </div>
  );
}

export default App;
