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
                    <span className="event-time">10:00 AM</span>
                </span>
                <span className="event-head">Event Head: Mr. XYZ</span>
                <div className="event-btn-container">
                    <button type='button' className="event-cta">Register</button>
                    <div className="event-cta-bg"/>
                </div>
            </div>
            <div className="event-details">
                <div className="event-details-heading">About AstroBytes:</div>
                <span className="event-des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at consequuntur doloribus expedita, minus nobis qui sit vero. Adipisci delectus, dolor doloribus nisi optio perferendis quo quod rem repudiandae suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus cumque rerum minus fugiat quas ipsam veritatis, esse nulla! Dicta, optio iusto! Tempore expedita ex quis. Esse natus quo reprehenderit, possimus optio quos autem assumenda. Nisi quia, accusamus inventore nesciunt quo, voluptates repudiandae harum dicta enim voluptatibus adipisci ab! Commodi.</span>
                <div className="event-details-heading">Rules:</div>
                <span className="event-des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at consequuntur doloribus expedita, minus nobis qui sit vero. Adipisci delectus, dolor doloribus nisi optio perferendis quo quod rem repudiandae suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                <div className="event-details-heading">Prize:</div>
                <span className="event-des">
                    <div>
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
                    </div>
                </span>
                
            </div>
        </div>
    </>
  )
}

export default EventDeatilsSideBar
