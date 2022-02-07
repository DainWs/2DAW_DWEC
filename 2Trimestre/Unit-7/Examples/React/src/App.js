import logo from './assets/logo.svg';
import './App.css';

import Welcome from './components/Welcome.js';
import { WelcomeClass } from './components/WelcomeClass';

var nombre = 'Jose';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><Welcome></Welcome> {nombre}</p>
        <WelcomeClass name="Jose"></WelcomeClass>
      </header>
    </div>
  );
}

export default App;
