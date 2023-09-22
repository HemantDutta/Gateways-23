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
                <span className="event-head">Event Head: Mr. XYZ</span>
                <span className="event-date">Event Date: XX-12-23</span>
                <span className="event-time">Event Time: XX:XX AM</span>
            </div>
            <div className="event-details">
                <span className="event-des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at consequuntur doloribus expedita, minus nobis qui sit vero. Adipisci delectus, dolor doloribus nisi optio perferendis quo quod rem repudiandae suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus cumque rerum minus fugiat quas ipsam veritatis, esse nulla! Dicta, optio iusto! Tempore expedita ex quis. Esse natus quo reprehenderit, possimus optio quos autem assumenda. Nisi quia, accusamus inventore nesciunt quo, voluptates repudiandae harum dicta enim voluptatibus adipisci ab! Commodi.</span>
            </div>
        </div>
    </>
  )
}

export default EventDeatilsSideBar
