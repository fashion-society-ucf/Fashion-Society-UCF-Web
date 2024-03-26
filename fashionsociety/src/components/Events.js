import React from "react";

export default function Events () {


    return(
        <div className="events-page">
            <h1>Upcoming Events</h1>
                <div className="calendar-container">
                    <iframe className="calendar"
                        title="Fashion Society Events"
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&showPrint=0&title=Fashion%20Society%20UCF&src=ZmFzaGlvbnNvY2lldHl1Y2ZAZ21haWwuY29t&color=%23C0CA33"
                        style={{ borderWidth: 0 }}
                        width={800}
                        height={600}
                        frameborder={0}
                        scrolling="no"
                    ></iframe>
                </div>
        </div>
    )
}