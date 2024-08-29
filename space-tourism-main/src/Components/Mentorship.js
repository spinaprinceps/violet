import React from "react";  // Step 1: Import useEffect

import "../style/mentorship.css";

export default function Mentorship() {
  //

    return (
        <section>
        <div className="row" id="div">
    <div className="col-lg-2" id="per1">
      <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
      <hr />
      <h2 className="fw-normal">1.Sarah Thompson</h2>
      <p className="font">
        - Session: "Building Your First Website"
        - Description: A hands-on workshop where students learned the basics of HTML, CSS, and JavaScript, culminating in the creation of a personal portfolio website.</p>
      <p><a className="btn btn-primary" href="#">Register</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-2" id="per2">
      <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
      <hr />
      <h2 className="fw-normal">2. Dr.Mark Patel</h2>
      <p className="font">
        - Session: "Demystifying Machine Learning"
        - Description: An introductory session that walked students through the concepts of supervised learning, with a focus on building a simple machine learning model using Python.</p>
      <p><a className="btn btn-primary" href="#">Register</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-2" id="per3">
      <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
      <hr />
      <h2 className="fw-normal">3.Jessica Lee</h2>
      <p className="font">
        - Session: "Protecting Your Digital Identity"
        - Description: A seminar on cybersecurity fundamentals, where students learned about common threats and basic tools to secure their online presence, including password management and two-factor authentication.</p>
      <p><a className="btn btn-primary" href="#">Register</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-2" id="per4">
      <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
      <hr />
      <h2 className="fw-normal">4.Alex Johnson</h2>
      <p className="font">
        - Session: "Game Development 101 with Unity"
        - Description: A project-based session where students were introduced to Unity and developed a basic 2D game, covering concepts like physics, animation, and scripting.</p>
      <p><a className="btn btn-primary" href="#">Register</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-2" id="per4">
      <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
      <hr />
      <h2 className="fw-normal">5.David Martinez</h2>
      <p className="font">
        - Session: "Game Development 101 with Unity"
        - Description: A project-based session where students were introduced to Unity and developed a basic 2D game, covering concepts like physics, animation, and scripting.</p>
      <p><a className="btn btn-primary" href="#">Register</a></p>
    </div>{/* /.col-lg-4 */}
  </div>
  <hr />
  <div className="col-lg-5" id="coun"><h3>COUNSELLOR</h3></div>
  <div className="row">
    <div className="col-lg-5" id="exp">
      <h5>Mr.Ranganath <div className="Location" /></h5>
      <p>Session:"Getting Started with Data Science"
        - Description:An interactive session that introduced students to data collection, analysis, and visualization, using real-world datasets and tools like Python and Pandas.</p>
      <button type="button" className="btn btn-warning">Connect</button>
      <br />
      <h5>Mr.David Martinez <div className="Location" /></h5>
      <p>Session:"Creating Your First Mobile App"
        - Description:A beginner's guide to app development where students learned the fundamentals of Swift for iOS and developed a simple app by the end of the session.</p>
      <button type="button" className="btn btn-warning">Connect</button>
    </div>
    <div className="col-lg-6" id="right">
      <h3 className="monospace">PREVIOUS ATTENDED SESSIONS</h3>
      <hr />
      <div className="priya">
        <strong>Priya Kumar</strong><br />
        <p>Session: "Creating Your First Mobile App"
          - A beginner's guide to app development where students learned the fundamentals of Swift for iOS and developed a simple app by the end of the session.</p>
      </div>
      <div className="priya">
        <strong>Dr.Ahmed Hassen</strong><br />
        <p>Session: "Exploring Quantum Algorithms"
          -  A deep dive into quantum computing basics, where students were introduced to quantum bits and implemented simple quantum algorithms using Qiskit.</p>
      </div>
      <div className="priya">
        <strong>Dr.Ahmed Hassen</strong><br />
        <p>Session:"Exploring Quantum Algorithms"
          -  A deep dive into quantum computing basics, where students were introduced to quantum bits and implemented simple quantum algorithms using Qiskit.</p>
      </div>
    </div>
  </div>
  <hr />
  <div className="row">
    <div className="col-lg-5" id="lft">
      <h4 id="lft">Collaborate,Learn,and Grow</h4>
      <div className="tech">
        <h5 className="data">TechPioneers</h5>
        <p className="data">Work together to explore and build new tech tools and apps, pushing the limits of what’s possible with technology.</p>
      </div>
      <div className="tech" id="te">
        <h5 className="data">CodeCraft</h5>
        <p className="data">
          Join forces to tackle fun coding challenges and develop cool software projects, enhancing your programming skills.</p>
      </div>
    </div>
    <div className="col-lg-6" id="rgt">
      <h4 className="dr">CONNECT WITH YOUR PEERS</h4>
      <div className="dr1">
      </div>
      <div className="row">
        <div className="dr1" id="guru">
          <div className="su">
            <h5>Arjun patel</h5>  
            <p>Class 10</p>
            <div className="na1">
              <strong>Programming</strong>
            </div>
            <div className="na2">
              <strong>AI</strong>
            </div>
            <div className="na3">
              <strong>Robotics</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="dr1">
      </div>
      <div className="dr1">
      </div>
    </div>
  </div>


        </section>
    );
}
