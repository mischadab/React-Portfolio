import React from "react";
import './About.css'
import headshot from '../assets/headshot.jpg'


function About() {
  return (
    // <div>

    <div className="container">

      <div class="row">

        <div class="col-md-auto">
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

        <div class="col-md-auto">
          <img className="img-fluid" src={headshot} alt="Mischa's headshot" />
        </div>

      </div>





    </div>

    // </div>
  );
}

export default About;