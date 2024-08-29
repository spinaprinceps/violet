import React from "react"
import { useNavigate } from "react-router-dom";
import tech from "../assets/hf/ai.png"
import art from "../assets/hf/art (1).png"
import business from"../assets/hf/team.png"
import maths from"../assets/hf/calculating.png"
import music from"../assets/hf/music-note (1).png"
import science from"../assets/hf/microscope.png"
import ball from"../assets/hf/sports.png"
import hand from"../assets/hf/signature.png"
import "../style/skills.css"

export default function Skills(){
  const navigate = useNavigate();
    return(
        <section>
   <div>
  <h3 className="heading-interest">What Are You Interested In..??</h3>
  <div className="row interest-row-1" id="interest-pic-1">
    <div className="col-lg-3">
      <div className="card interest-card" style={{width: '14rem'}}>
        <img src={art} className="card-img-top interest-img" alt="Visual Arts and Design" />
        <div className="card-body interest-card-body">
          <p className="card-text interest-card-text"><strong>Visual Arts and Design</strong></p>
        </div>
      </div>
    </div>
    <div className="col-lg-3">
      <div className="card interest-card" onClick={() => navigate("/eskill")} style={{width: '14rem'}}>
        <img  src={tech}  className="card-img-top interest-img" alt="Technology And Innovation" />
        <div className="card-body interest-card-body">
          <p className="card-text interest-card-text"><strong>Technology And Innovation</strong></p>
        </div>
      </div>
    </div>
    <div className="col-lg-3">
      <div className="card interest-card" style={{width: '14rem'}}>
        <img  src={music}  className="card-img-top interest-img" alt="Music And Performing Arts" />
        <div className="card-body interest-card-body">
          <p className="card-text interest-card-text"><strong>Music And Performing Arts</strong></p>
        </div>
      </div>
    </div>
    <div className="col-lg-3">
      <div className="card interest-card" style={{width: '14rem'}}>
        <img  src={science}  className="card-img-top interest-img" alt="Science And Research" />
        <div className="card-body interest-card-body">
          <p className="card-text interest-card-text"><strong>Science And Research</strong></p>
        </div>
      </div>
    </div>
  </div>
  <div className="row interest-row-2" id="interest-pic-2">
    <div className="col-lg-3">
      <div className="card interest-card" style={{width: '14rem'}}>
        <img  src={business}  className="card-img-top interest-img" alt="Business And Entrepreneurship" />
        <div className="card-body interest-card-body">
          <p className="card-text interest-card-text"><strong>Business And Entrepreneurship</strong></p>
        </div>
      </div>
    </div>
    <div className="col-lg-3">
      <div className="card interest-card" style={{width: '14rem'}}>
        <img src={hand}  className="card-img-top interest-img" alt="Literature And Writing" />
        <div className="card-body interest-card-body">
          <p className="card-text interest-card-text"><strong>Literature And Writing</strong></p>
        </div>
      </div>
    </div>
    <div className="col-lg-3">
      <div className="card interest-card" style={{width: '14rem'}}>
        <img  src={ball}  className="card-img-top interest-img" alt="Sports And Fitness" />
        <div className="card-body interest-card-body">
          <p className="card-text interest-card-text"><strong>Sports And Fitness</strong></p>
        </div>
      </div>
    </div>
    <div className="col-lg-3">
      <div className="card interest-card" style={{width: '14rem'}}>
        <img  src={maths}  className="card-img-top interest-img" alt="Mathematics And Analytics" />
        <div className="card-body interest-card-body">
          <p className="card-text interest-card-text"><strong>Mathematics And Analytics</strong></p>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div className="row video-row" id="video-section">
    <div className="col-lg-2 video-col" id="video-box-1">
      <h4 className="video-title">VIDEO</h4>
    </div>
    <div className="col-lg-2 video-col" id="video-box-2">
      <h4 className="video-title">VIDEO</h4>
    </div>
    <div className="col-lg-2 video-col" id="video-box-3">
      <h4 className="video-title">VIDEO</h4>
    </div>
    <div className="col-lg-2 video-col" id="video-box-4">
      <h4 className="video-title">VIDEO</h4>
    </div>
    <div className="col-lg-2 video-col" id="video-box-5">
      <h4 className="video-title">VIDEO</h4>
    </div>
  </div>
  <div className="row resource-quiz-row" id="resource-quiz-section">
    <div className="col-lg-5 resource-col" id="resource-box">
      <h1 className="resource-title">Resources</h1>
    </div>
    <div className="col-lg-5 quiz-col" id="quiz-box">
      <h1 className="quiz-title">Quiz</h1>
    </div>
  </div>
</div>


        </section>
    );

}
