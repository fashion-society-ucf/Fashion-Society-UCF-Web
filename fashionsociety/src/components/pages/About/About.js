import React from "react";
import "./about.css"

export default function About() {
  document.body.style.backgroundColor = "#312E2E";

  return (
    <div className="content">
      <div className="about">
        <p className="title">What is Fashion Society?</p>
        <p>
          We are an all inclusive club that is determined to create a safe space for any and all student creatives interested in the fashion industry. Our focus is on creating a judgement free zone and in making a positive
          difference within the industry, giving students of all majors the opportunity to dive into a successful career in fashion. We specialize in 9 main committees being <strong>Beauty, Design, Modeling, Photography, Production, Social Media, Styling, Web Design, and Zine</strong>.
        </p>
      </div>

      <div className="officers">
        <p className="board-title">Our Executive Officers</p>
        <div className="officer-list">
          <div className="image-card">
            <img src="./eboard photos/erin-headshot.jpg" alt="Erin" />
            <div className="text">
              <strong>Erin Kaplan</strong>
              <p>President</p>
            </div>
          </div>

          <div className="image-card">
            <img src="./eboard photos/juju-headshot.JPG" alt="Juju" />
            <div className="text">
              <strong>Juju Gordon</strong>
              <p>Vice President</p>
            </div>
          </div>

          <div className="image-card">
            <img src="./eboard photos/alex-headshot.JPG" alt="Alex" />
            <div className="text">

              <strong>Alexandra Cabrera</strong>
              <p>Treasurer</p>
            </div>
          </div>

          <div className="image-card">
            <img src="./eboard photos/anthony-headshot.JPG" alt="Anthony" />
            <div className="text">
              <strong>Anthony Urena</strong>
              <p>Secretary and Creative Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}