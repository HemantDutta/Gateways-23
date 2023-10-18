// Adhish Bahl
import React, { useEffect, useState } from 'react'

function EventDeatilsSideBar ({id, imgSrc}) {

    const [animationActive, setAnimatiionActive] = useState("none")

    useEffect(() => {
        setAnimatiionActive("active")
    }, []);

  return (
    <>
        <div className={`event-overview ${animationActive}`}>    
            <img src={process.env.PUBLIC_URL + imgSrc} alt="Event Img"/> 
            <div className="event-banner">
                <span className="event-header">AstroBytes</span>
                <span className="event-tag">Space Tech Quiz</span>
                <span className="event-date-time">
                    <span className="event-date">13th Dec</span>
                    <span className="event-time">9:00 AM</span>
                </span>
                <span className="event-head">
                <div>Contact details</div>
                <div>Akash - +91 96027 16766</div>
                <div>Prajwal - +91 91132 72654</div>
                </span>
                <div className="event-btn-container">
                    <button type='button' className="event-cta">Register</button>
                    <div className="event-cta-bg"/>
                </div>
            </div>
            <div className="event-details">
                <div className="event-details-heading">About AstroBytes:</div>
                <span className="event-des">Are you the Einstein of technology trivia? Do you know your bytes from your galaxies? Think you can navigate the digital constellations, decode cosmic algorithms, and unravel the mysteries of tech in the vastness of space? Join us at Astrobytes and embark on a celestial quest through the cosmos of IT knowledge.</span>
                <div className="event-details-heading">Rules:</div>
                <span className="event-des">
                    <div>
                        <span className="event-des-subheading">Onspot Registration: </span>
                        <span className="event-des-sub">Available</span>
                    </div>
                    <div>
                        <span className="event-des-subheading">Team Size Upto: </span>
                        <span className="event-des-sub">2</span>
                    </div>
                    <div>
                        <span className="event-des-subheading">Pre-Requisites: </span>
                        <span className="event-des-sub">Participants should have knowledge about the latest developments in space technology-related events.</span>
                    </div>
                </span>
                <div className="event-details-heading">Prize:</div>
                <span className="event-des">
                    Exciting Cash Prizes for top 3 winners! 
                    {/* <div>
                        <span className="event-des-subheading">First Prize: </span>
                        <span className="event-des-sub">Rs. XX,XXX</span>
                    </div>
                    <div>
                        <span className="event-des-subheading">Second Prize: </span>
                        <span className="event-des-sub">Rs. XX,XXX</span>
                    </div>
                    <div>
                        <span className="event-des-subheading">Third Prize: </span>
                        <span className="event-des-sub">Rs. XX,XXX</span>
                    </div> */}
                </span>
                
            </div>
        </div>
    </>
  )
}

export default EventDeatilsSideBar
