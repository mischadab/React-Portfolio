import React from "react";
import './About.css'
import headshot from '../assets/headshot.jpg'


function About() {
  return (
  

    <div className="container">

      <div className="row">

        <div className="col-md-auto">
          <h3>Let me introduce myself!</h3>
          <p>
            Hi! I'm Mischa Dabrowski. I'm a junior front-end web developer, with a background in graphic design and photography.
          </p>
          <p>
            Aside from coding, here are some other activities that I love to do:
          <ul>
              <li>Playing games</li>
              <li>Tinkering with film cameras</li>
              <li>Drawing</li>
              <li>Rollerskating</li>
            </ul>
          </p>
        </div>

        <div className="col-md-auto">
          <img className="img-fluid" src={headshot} alt="Mischa's headshot" />
        </div>

      </div>

      <div className="prof">
      <button><a className="linkdec" href="../assets/MDabrowski Resume 2021.pdf">DOWNLOAD MY RESUME HERE!</a></button>
      </div>

      <div className="prof">
        <h3>PROFESSIONAL SKILL SET</h3>
    <br></br>
      <div>
      <i className="devicon-html5-plain icons"></i>
      <i className="devicon-css3-plain icons"></i>
      <i className="devicon-javascript-plain icons"></i>
      <i className="devicon-nodejs-plain icons"></i>
      <i class="devicon-express-original-wordmark icons"></i>
      </div>
      <br></br>
      <br></br>
      <div>
      <i className="devicon-mysql-plain icons"></i>
      <i className="devicon-mongodb-plain icons"></i>
      <i className="devicon-react-original icons"></i>
      <i className="devicon-bootstrap-plain-wordmark icons"></i>
      <i className="devicon-github-original icons"></i>
      </div>
      </div>
<br></br>

    <div className="prof">
      
    <h4>CONNECT WITH ME ON</h4>
                <a href="https://github.com/mischadab">
                  <i className="fab fa-github icons2"></i>
                </a>
                <a href="https://ca.linkedin.com/in/mischa-dabrowski-076b2214a">
                  <i className="fab fa-linkedin icons2"></i>
                </a>

    </div>



    </div>

 
  );
}

export default About;