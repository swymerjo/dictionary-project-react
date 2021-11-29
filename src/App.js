import logo from "./logo-2.svg";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
         <div className="container">
      <header className="App-header">
  <img src={logo} className="logo img-fluid" alt="logo" />
      </header>
        <main>
    <Dictionary />
      </main>
      <footer className="mt-3">
        Dictionary App by Sammy Wymer
      </footer>
    </div>
    </div>
  );
}

export default App;
