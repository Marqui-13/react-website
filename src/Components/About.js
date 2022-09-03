import React from "react";
import profilepic from "../Components/profilepic.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const About = ({ data }) => {
  if (data) {
    var bio = data.bio;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Marqui's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns download">
              <p>
                <button className="button download">
                <FontAwesomeIcon icon={faDownload} bounce /> Download Resume
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
