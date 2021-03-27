import './Portfolio.css'
import EmpDir from '../assets/EmpDir.png'
import Weather from '../assets/Weather.png'
import TeamGen from '../assets/TeamGen.png'
import Planner from '../assets/Planner.png'
import Panther from '../assets/Panther.jpeg'
import GME from '../assets/GME.png'

function Portfolio() {
    return (
        <div>
            <div className="row">
                <div class="card mb-3 cardsize">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img className="img-fluid" src={GME} alt="Get Me Employed" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 cardsize">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img className="img-fluid" src={Panther} alt="Panther Chat room" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="card mb-3 cardsize">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img className="img-fluid" src={EmpDir} alt="Employee Directory" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 cardsize">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img className="img-fluid" src={Weather} alt="Weather Dashboard" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="card mb-3 cardsize">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img className="img-fluid" src={Planner} alt="Work Day Planner" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 cardsize">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img className="img-fluid" src={TeamGen} alt="Team Profile Generator" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio;