import React from "react";
import './eventcards.css'

const events = [
    { id: 1, name: 'Market Day', time: '10:00 AM', date: '2024-04-01', location: 'Location 1' },
    { id: 2, name: 'Model For A Day', time: '02:00 PM', date: '2024-04-02', location: 'Location 2' },
    { id: 3, name: 'Blaze Pizza Social Fundraiser', time: '06:00 PM', date: '2024-04-03', location: 'Location 3' },
    { id: 4, name: 'The Four Elements-Spring Fashion Show', time: '09:00 AM', date: '2024-04-04', location: 'Location 4' },
    { id: 5, name: 'Last GBM', time: '04:00 PM', date: '2024-04-05', location: 'Location 5' },
  ];
  
  const Card = ({ event }) => {
    return (
      <div className="card">
        <h2>{event.name}</h2>
        <p>Time: {event.time}</p>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
      </div>
    );
  };
  
  const CardList = () => {
    return (
      <div className="card-list">
        {events.map(event => (
          <Card key={event.id} event={event} />
        ))}
      </div>
    );
  };
  
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
                        height={500}
                        frameborder={0}
                        scrolling="no"
                    ></iframe>
                    <div className="scroll-container">
        <CardList />
      </div>
                </div>
        </div>
    )
}