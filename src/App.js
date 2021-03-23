import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

// import Wrapper from "./components/Wrapper";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">Mischa Dabrowski</NavLink>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (

    <div>
      <Router>
        <Navbar />
        <main>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </main>
      </Router>

      <footer className="footer">
        <span>© Copyright</span>
      </footer>


    </div>

  );
}

export default App;

