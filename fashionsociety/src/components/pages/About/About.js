import React from "react";
import "./about.css"

export default function About() {
  document.body.style.backgroundColor = "#312E2E";

  return (
    <div className="about-page">
      <div className="about-section">
        <img className="about-header" src="./images/day edit/day-collage-2-800.jpg" alt="header for about page"></img>
        <h2>What is Fashion Society?</h2>
        <p>We are an all inclusive club that is determined to create a safe space for any and all student creatives interested in the fashion industry. Our focus is on creating a judgement free zone and in making a positive
          difference within the industry, giving students of all majors the opportunity to dive into a successful career in fashion. We specialize in 9 main committees being Beauty, Design, Modeling, Photography, Production, Social Media, Styling, Web Design, and Zine.</p>
        <h3>Executive Board</h3>
        <div className="image-grid">
          <div className="image-card">
            <img src="./eboard photos/erin-headshot.jpg" alt="Erin" />
            <p>Erin Kaplan, President</p>
          </div>
          <div className="image-card">
            <img src="./eboard photos/juju-headshot.JPG" alt="Juju" />
            <p>Juju Gordon, Vice President</p>
          </div>
          <div className="image-card">
            <img src="./eboard photos/alex-headshot.JPG" alt="Alex" />
            <p>Alexandra Cabrera, Tresurer</p>
          </div>
          <div className="image-card">
            <img src="./eboard photos/anthony-headshot.JPG" alt="Anthony" />
            <p>Anthony Urena, Secretary and Creative Director</p>
          </div>
        </div>
      </div>
    </div>
  )
}