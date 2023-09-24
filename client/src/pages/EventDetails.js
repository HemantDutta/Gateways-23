// Adhish Bahl
import React from 'react'
import './EventDetails.css'
import EventDeatilsSideBar from '../components/EventDeatilsSideBar'
import { PublicNavbar } from '../components/PublicNavbar'


function EventDetails() {
  return (
    <div>
        {/* Importing global CSS */}
        <link href="/assets/Gateways23.css" rel="stylesheet" type="text/css" />
        {/* Header */}
        <PublicNavbar active="events"/>
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
                <form action="" method="" className='registration-form'>
                    <input type="text" name="Name" id="name" placeholder='Participant Name' />
                    <input type="email" name="email" id="email" placeholder='E-mail' />
                    <input type="phone" name="phone" id="phone" placeholder='Phone Number' />
                    <input type="text" name="college" id="college" placeholder='College Name' />
                    <div className="event-btn-container">
                        <button type='button' className="event-cta">Register</button>
                        <div className="event-cta-bg"/>
                    </div>
                </form>
            </div>
            {/* Events Form SideBar End */}
        </section>
      
    </div>
  )
}

export default EventDetails
