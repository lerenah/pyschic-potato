import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Continuos deployment w/ Travis CLI
        </p>
        <a
          className="App-link"
          href="https://kubernetes.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bye There!
        </a>
      </header>
    </div>
  );
}

export default App;
