import React from "react";
import "./production.css"

export default function Production () {
    return(
        <div>
            <h1>Production</h1>
            <div className="opening-section">
            <div className="description">
                <p>The Production committee is all about making sure events run smoothly and taking care of behind the scenes affairs. The main responsibilities of the committee include model escorting, ticketing, music and lights. As production chairman, I will also be in charge of keeping our Eventbrite up to date and touring venues for the club's annual spring fashion show in order to assure all production needs are met.</p> 
            </div>
           
            <div className="chairman-photo">
            <h3>Production Chairman</h3>
                <img src="./eboard photos/lily-headshot.jpg" alt="production chair" />
                <p>Lily Rath</p>
            </div>
            </div>

            <div className="content">
                <div className="content-container">
                    <video src='./production-contents/IMG_1033.mp4'></video>
                </div>
            </div>
        </div>
    )
}