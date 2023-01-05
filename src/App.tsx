import './App.css';
// @ts-ignore
import Header from './components/Header.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <Header></Header>
      </header>
    </div>
  );
}

export default App;
