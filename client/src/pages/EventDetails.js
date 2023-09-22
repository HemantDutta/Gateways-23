// Adhish Bahl
import React from 'react'
import { Navbar } from '../components/Navbar'
import './EventDetails.css'
// import "../../public/assets/Gateways23.css"
import EventDeatilsSideBar from '../components/EventDeatilsSideBar'


function EventDetails() {
  return (
    <div>
        {/* Importing global CSS */}
        <link href="/assets/Gateways23.css" rel="stylesheet" type="text/css" />
        {/* Header */}
        <Navbar active="home"/>
        {/* Header End */}
        {/* Container for event details and form */}
        <section className="event-container">
            {/* Events Details SideBar */}
            <div className="event-sidebar">
                <EventDeatilsSideBar id="itQuiz" imgSrc="/assets/eventImgs/itQuiz.png" active="active"/>
            </div>
            {/* Events Details SideBar End */}
            {/* Events Form SideBar */}
            <div className="event-form">
                <div className="event-form-heading">Registration Form</div>
                <form action="" method="get">
                    <input type="text" name="" id="" />
                    <button type="button">Submit</button>
                </form>
            </div>
            {/* Events Form SideBar End */}
        </section>
      
    </div>
  )
}

export default EventDetails
