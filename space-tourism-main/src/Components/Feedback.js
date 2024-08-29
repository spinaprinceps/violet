import React from "react"

import "../style/feedback.css"

export default function Feedback(){
    return(
       <section>
  <h1 /><h2 className="fed">Feedback Form</h2>
  <hr />
  <div className="row-lg-3" id="rec">
    <h5 className="nam"><strong>Name:</strong></h5>
    <div className="row" id="red">
      <div className="col">
        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
      </div>
    </div>
    <div className="but">
      <strong>please provide your feedback on the quality of services</strong><br />
      <div className="form-check form-check-inline" id="rad">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
        <label className="form-check-label" htmlFor="inlineRadio1">Excellent</label>
      </div>
      <div className="form-check form-check-inline" id="red">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
        <label className="form-check-label" htmlFor="inlineRadio2">Very Good</label>
      </div>
      <div className="form-check form-check-inline" id="red">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
        <label className="form-check-label" htmlFor="inlineRadio2">Good</label>
      </div>
      <div className="form-check form-check-inline" id="red">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
        <label className="form-check-label" htmlFor="inlineRadio2">Average</label>
      </div>
      <div className="form-check form-check-inline" id="red">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
        <label className="form-check-label" htmlFor="inlineRadio2">Poor</label>
      </div>
    </div>
    <strong className="do">Do you have suggestions on what we can do to provide you with a better services..?</strong>
    <div className="form-floating" id="comme">
      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
      <label htmlFor="floatingTextarea2">Type here...</label>
    </div>
    <button type="button" className="btn btn-secondary" id="submit">Submit</button>
  </div></section>

    );

}
