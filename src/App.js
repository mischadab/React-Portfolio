import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Footer from "./components/Footer";
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
            <NavLink to="/discover" className="nav-link" activeClassName="active">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/search" className="nav-link" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <footer className="footer">
          <span>© Copyright</span>
        </footer>
      </div>
    </Router>
  );
}

export default App;





// simple component for 
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">Pupster</NavLink>
      {/* <a href="/" class="navbar-brand">Pupster</a> */}
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/discover" className="nav-link" activeClassName="active">Discover</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/search" className="nav-link" activeClassName="active">Search</NavLink>
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
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/search" component={Search} />
          </main>
        </Router>

        <footer className="footer">
          <span>Pupster 2020</span>
        </footer>
      </div>
  );
}

export default App;
