import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import './components/footer.css'
import './App.css'
import Wrapper from './components/Wrapper'

function Navbar() {
  return (

    <div>
      <h1 className="title">Mischa Dabrowski</h1>
      <nav>
      <NavLink to="/" className="navv"> ABOUT </NavLink>    
      <NavLink to="portfolio" className="navv"> PORTFOLIO </NavLink>     
      <NavLink to="/contact" className="navv"> CONTACT </NavLink>   
      </nav>
    </div>

  );
}

function App() {
  return (

      <div>
      <Router>
     

        <Wrapper>
          <Navbar />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
      
        </Wrapper>

      </Router>

      <footer className="footer">
        <span>© Copyright</span>
      </footer>


    </div>

  );
}

export default App;

