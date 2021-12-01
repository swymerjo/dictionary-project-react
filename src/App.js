import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
         <div className="container">
      <header className="App-header">
<h3 className="emoji mt-3 mb-1">📚</h3>
      </header>
        <main>
          <h1 className="mb-2">
            Dictionary 
            </h1>
    <Dictionary defaultKeyword="rainbow"/>
      </main>
      <footer className="mt-3">
        <strong>Dictionary App</strong> by <a href="https://twitter.com/SammyWymer" className="footer-name text-decoration-none">Sammy Wymer</a> with <a href="https://github.com/swymerjo/dictionary-project-react" className="footer-opensource">Open-Source Code</a>
      </footer>
    </div>
    </div>
  );
}

export default App;
