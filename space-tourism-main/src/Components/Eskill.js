import React from "react"
import { useNavigate } from "react-router-dom";
import "../style/eskills.css"

export default function Eskill(){
    const navigate = useNavigate();
    return(
        <section>
         <div className="holder">
  <div className="subdiv">
    <h1 className="tech" >Technology and Innovation</h1>
    
      <h3 className="AI" onClick={() => navigate("/fskill")}>Artificial Intelligence </h3>
    
    <h3 className="program">Programming</h3>
    <h3 className="robo">Robotics</h3>
    <h3 className="game">Game Development</h3>
  </div>
</div>
 
        </section>
    );

}
