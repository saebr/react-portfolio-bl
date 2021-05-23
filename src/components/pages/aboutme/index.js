import React from "react";
import "./style.css";

function AboutMe(props) {
    return (
        <div className="container">
            <div id="aboutme" className="jumbotron bg-dark row justify-content-around">

            <div className=" col-md-6">
                <h1 className="display-4 text-white">Hey, I'm <span className= "text-blue">Ben</span>.</h1>
                <p className="lead text-light ">I'm a technical expert with recent Full Stack Development training including fundamental knowledge of software design, development, and testing. Seeking to utilize broad educational background with excellent analytical, technical, and programming skills to thrive as an entry-level Full Stack software developer.</p>
            </div>
            <div className="col-xs-3 rounded pt-5" style={{width: 400}}>
          <img src="./images/image_Original.jpg" className="card-img-top rounded shadow m-1" alt="Picture of Benjamin Levin"/>
        </div>
            </div>
        </div>
    );
  }

  export default AboutMe;