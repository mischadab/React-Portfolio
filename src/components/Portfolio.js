import './Portfolio.css'
import EmpDir from '../assets/EmpDir.png'
import Weather from '../assets/Weather.png'
import TeamGen from '../assets/TeamGen.png'
import Planner from '../assets/Planner.png'
import Panther from '../assets/Panther.jpeg'
import GME from '../assets/GME.png'

function Portfolio() {
    return (
        <div className="pagebody">
            <div className="row">
                <div class="card mb-3 cardsize">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img className="imgcard" src={GME} alt="Get Me Employed" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Get Me Employed</h5>
                                <p class="card-text">A small job search application that allows the user to search for a job, and save jobs to look at again later.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 cardsize">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img className="imgcard" src={Panther} alt="Panther Chat room" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Panther Chatroom</h5>
                                <p class="card-text">A chat application that allows the user to chat with people, add them as a friend, view their friends and create a profile.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="card mb-3 cardsize">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img className="imgcard" src={EmpDir} alt="Employee Directory" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Employee Directory</h5>
                                <p class="card-text">An application that allows the user to search their employee directory, as well as sort employees by first name or last name.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 cardsize">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img className="imgcard" src={Weather} alt="Weather Dashboard" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Weather Dashboard</h5>
                                <p class="card-text">This application allows the user to search their city, and view the current weather as well as a 5 day forecast.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="card mb-3 cardsize">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img className="imgcard" src={Planner} alt="Work Day Planner" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Work Day Planner</h5>
                                <p class="card-text">A simple work day planner that allows the user to schedule their daily tasks, and the hours change colour based on whether they are past, present or future.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 cardsize">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img className="imgcard" src={TeamGen} alt="Team Profile Generator" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Team Profile Generator</h5>
                                <p class="card-text">An application that allows a user to generate their teams profile and display them on a web page.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio;