import logo from './logo.svg';
import './App.css';
import { count, lenght } from './number'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style = {{
          color: 'blue'
        }}>Hello, new journey!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          If you multiply {count} by {lenght} you get {count * lenght}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
