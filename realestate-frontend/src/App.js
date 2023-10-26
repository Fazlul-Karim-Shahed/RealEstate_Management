
import './App.css';
import Navbar from './Components/Navbar';
import Router from './Routers/Router';

function App() {
  return (
    <div className="App">
      <div className="bg-dark"><Navbar /></div>
      <Router />
    </div>
  );
}

export default App;
