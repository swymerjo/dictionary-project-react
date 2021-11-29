import logo from "./logo-2.svg";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
         <div className="container">
      <header className="App-header">
  <img src={logo} className="logo img-fluid shadow" alt="logo" />
      </header>
        <main>
          <h1 className="mb-2">
            Dictionary 
            </h1>
            <h2>
              What definition do you want to search for?
            </h2>
    <Dictionary />
      </main>
      <footer className="mt-3">
        <strong>Dictionary App</strong> by <a href="https://twitter.com/SammyWymer" className="footer-name text-decoration-none">Sammy Wymer</a> with <a href="https://github.com/swymerjo/dictionary-project-react" className="footer-opensource">Open-Source Code</a>
      </footer>
    </div>
    </div>
  );
}

export default App;
