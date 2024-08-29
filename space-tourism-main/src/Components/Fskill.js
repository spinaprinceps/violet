import React from "react"

import "../style/fskill.css"

export default function Fskill(){
    return(
        <section>
           <div className="container5">
  <div className="maindiv">
    <img src="AIengineer.jpg" alt width="500px" height="600px" />
  </div>
  <div className="image">
    <div className="imgs">
      <u><h2 className="work">Most popular workshops on AI</h2></u>
      <div className="props">
        <img className="aihuman" src="AI image.jpeg" alt width="150px" height="150px" />
        <p>Join us for an immersive AI and Data Science workshop, where you'll gain hands-on experience with the latest tools and techniques. Learn from industry experts, connect with like-minded professionals, and unlock new career opportunities.. Don't miss out—register today!
        </p>
      </div>
      <button className="enroll1">Enroll now</button>
      <div className="aibody">
        <img className="aihead" src="AI-header-2.png" alt width="250px" height={150} />
        <p>"Join our hands-on Machine Learning workshop to explore the fundamentals of AI and Data Science. Dive into real-world applications, gain practical skills, and learn to build your  models . Empower your future with the power of machine learning!"</p>
      </div>
      <button className="enroll1">Enroll now</button>
    </div>
    <div className="subbox">
      <u><h3>Progress tracking</h3></u> 
      <br />
      <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar" style={{width: '25%'}}>25%</div>
      </div>
    </div>
  </div>
  <div className="badcert">
    <div className="badges">
      <u> <h3>Badges Earned</h3></u> 
      <div className="medal">
        <img src="badges.webp" alt width="120px" />
        <img src="badges.webp" alt width="120px" />
        <img src="badges.webp" alt width="120px" />
      </div>
    </div>
    <div className="mentor">
      <u><h2>Our Top Mentors</h2></u>
      <div className="men1">
        <img src="mentor2.png" alt width="80px" />
        <div className="paran1">
          <h5>Liam Carter</h5>
          <p>Machine learning engineer</p>
          <p>5 years of experience</p>
        </div>
      </div>
      <div className="men2">
        <img src="mentor1.png" alt width="80px" />
        <div className="paran2">
          <h5>Emily Haris</h5>
          <p>AI research scientist</p>
          <p>6 years of experience</p>
        </div>
      </div>
      <div className="men3">
        <img src="mentor3.webp" alt width="80px" />
        <div className="para3">
          <h5>Jackson Reed</h5>
          <p>Deep learning engineer</p>
          <p>5 years of experience</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </section>
    );

}
