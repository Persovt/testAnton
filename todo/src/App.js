import logo from './logo.svg';
import './App.css';
const can = true;
const word = 'Hi';
const count = 11;
const minus = 45 - 11


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
          {word} guest. You have done {count} lessons from {45}, else {minus} let's go!
        </p>
        <p>
         you can do it {can && 'if is true'} {can ? 'if is true' : 'if is false'}
          {undefined}  {null} {true} {false}
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
