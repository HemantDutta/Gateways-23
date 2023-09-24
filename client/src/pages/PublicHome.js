import {PublicNavbar} from "../components/PublicNavbar";
import {PreLoader} from "../components/PreLoader";
import './PublicHome.css'
import Halo from "vanta/src/vanta.halo";
import {useEffect, useRef, useState} from "react";
import Atropos from "atropos/react";
// import 'atropos/css'

export const PublicHome = () => {

    //states
    const [bgEffect, setBgEffect] = useState(null);
    const heroRef = useRef(null);

    //BG Effect Loader
    useEffect(() => {
        if (!bgEffect)
            if (window.innerWidth < 1320) {
                {
                    setBgEffect(Halo({
                        el: heroRef.current,
                        size: 1,
                        baseColor: "#974de0",
                        backgroundColor: "#1d0728",
                        xOffset: 0
                    }))
                }
            } else if (window.innerWidth > 1320) {
                {
                    setBgEffect(Halo({
                        el: heroRef.current,
                        size: 1.5,
                        baseColor: "#974de0",
                        backgroundColor: "#1d0728",
                        xOffset: 0.23
                    }))
                }
            }
        return () => {
            if (bgEffect) {
                bgEffect.destroy();
            }
        }
    }, [bgEffect])

    //Resize Handler
    useEffect(() => {
        const checkResize = () => {
            if (window.innerWidth < 1320) {
                setBgEffect(null);
            } else if (window.innerWidth > 1320) {
                setBgEffect(null);
            }
        }

        window.addEventListener("resize", checkResize);

        return () => {
            window.removeEventListener("resize", checkResize);
        }
    }, [])

    //Preloader Handler
    function preLoader() {
        console.log("Preload Handled");
    }

    return (
        <>
            {/*Preloader*/}
            <PreLoader preHandler={preLoader}/>
            {/*Preloader End*/}
            {/*  Header  */}
            <PublicNavbar active="home"/>
            {/*  Header End  */}
            <div className="public-home">
                {/*  Hero  */}
                <section className="hero" id="hero" ref={heroRef}>
                    <div className="hero-container">
                        <div className="hero-left">
                            <span data-text="Code">Code</span>
                            <span data-text="Cosmos">Cosmos</span>
                        </div>
                        <div className="hero-right">
                            <img src="assets/gw_white_trans.png" alt="Gateways 2023"/>
                        </div>
                    </div>
                </section>
                {/*  Hero End  */}
                {/*  Events  */}
                <section className="events" id="events">
                    <div className="events-container">
                        <div className="events-header">
                            <span>Our</span>
                            <span>Events</span>
                        </div>
                        <div className="events-grid">
                            <Atropos
                                activeOffset={40}
                                shadowScale={1.5}
                            >
                                <div className="event-item event-odd">
                                    <div className="event-bg" data-atropos-offset="5"/>
                                    <img src="assets/eventImgs/hack.jpg" className="event-bg-img" data-atropos-offset="-5" alt="Hackathon"/>
                                    <span className="hover-text" data-atropos-offset="5">Hackathon</span>
                                    <span className="hover-text2" data-atropos-offset="5">Hackathon</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, fugiat!</span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta">Register</button>
                                        <div className="event-cta-bg"/>
                                    </div>
                                </div>
                            </Atropos>
                            <Atropos
                                activeOffset={40}
                                shadowScale={1.5}
                            >
                                <div className="event-item event-even">
                                    <div className="event-bg" data-atropos-offset="5"/>
                                    <img src="assets/eventImgs/th.jpg" className="event-bg-img" data-atropos-offset="-5" alt="Hackathon"/>
                                    <span className="hover-text" data-atropos-offset="5">Treasure Hunt</span>
                                    <span className="hover-text2" data-atropos-offset="5">Treasure Hunt</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, fugiat!</span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta">Register</button>
                                        <div className="event-cta-bg"/>
                                    </div>
                                </div>
                            </Atropos>
                            <Atropos
                                activeOffset={40}
                                shadowScale={1.5}
                            >
                                <div className="event-item event-odd">
                                    <div className="event-bg" data-atropos-offset="5"/>
                                    <img src="assets/eventImgs/se.jpg" className="event-bg-img" data-atropos-offset="-5" alt="Hackathon"/>
                                    <span className="hover-text" data-atropos-offset="5">Surprise Event</span>
                                    <span className="hover-text2" data-atropos-offset="5">Surprise Event</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, fugiat!</span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta">Register</button>
                                        <div className="event-cta-bg"/>
                                    </div>
                                </div>
                            </Atropos>
                            <Atropos
                                activeOffset={40}
                                shadowScale={1.5}
                            >
                                <div className="event-item event-odd">
                                    <div className="event-bg" data-atropos-offset="5"/>
                                    <img src="assets/eventImgs/hack.jpg" className="event-bg-img" data-atropos-offset="-5" alt="Hackathon"/>
                                    <span className="hover-text" data-atropos-offset="5">Hackathon</span>
                                    <span className="hover-text2" data-atropos-offset="5">Hackathon</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, fugiat!</span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta">Register</button>
                                        <div className="event-cta-bg"/>
                                    </div>
                                </div>
                            </Atropos>
                            <Atropos
                                activeOffset={40}
                                shadowScale={1.5}
                            >
                                <div className="event-item event-even">
                                    <div className="event-bg" data-atropos-offset="5"/>
                                    <img src="assets/eventImgs/th.jpg" className="event-bg-img" data-atropos-offset="-5" alt="Hackathon"/>
                                    <span className="hover-text" data-atropos-offset="5">Treasure Hunt</span>
                                    <span className="hover-text2" data-atropos-offset="5">Treasure Hunt</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, fugiat!</span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta">Register</button>
                                        <div className="event-cta-bg"/>
                                    </div>
                                </div>
                            </Atropos>
                            <Atropos
                                activeOffset={40}
                                shadowScale={1.5}
                            >
                                <div className="event-item event-odd">
                                    <div className="event-bg" data-atropos-offset="5"/>
                                    <img src="assets/eventImgs/se.jpg" className="event-bg-img" data-atropos-offset="-5" alt="Hackathon"/>
                                    <span className="hover-text" data-atropos-offset="5">Surprise Event</span>
                                    <span className="hover-text2" data-atropos-offset="5">Surprise Event</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, fugiat!</span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta">Register</button>
                                        <div className="event-cta-bg"/>
                                    </div>
                                </div>
                            </Atropos>
                        </div>
                    </div>
                </section>
                {/*  Events End  */}
                {/*  Sponsors  */}
                <section className="sponsors" id="sponsors">
                    <div className="sponsors-container">

                    </div>
                </section>
                {/*  Sponsors End  */}
                {/*  Guests  */}
                <section className="guests" id="guests">
                    <div className="guests-container">
                        <div className="guests-header">
                            <span>Meet</span>
                            <span>our Guests</span>
                        </div>
                        <div className="guests-grid">
                            <div className="guest-item guest-chief">
                                <div className="guest-item-framing-left"/>
                                <div className="guest-item-framing-right"/>
                                <div className="guest-content">
                                    <div className="guest-img">
                                        <img src="assets/guest-temp.jpg" className="guest-img-bg" alt="Guest name"/>
                                        <img src="assets/guest-temp.jpg" className="guest-img-fg" alt="Guest name"/>
                                    </div>
                                    <div className="guest-text">
                                        <span className="guestName">Guest Name</span>
                                        <span className="guestDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cumque earum esse eum inventore natus officiis perferendis repudiandae vitae. Iure!</span>
                                    </div>
                                </div>
                            </div>
                            <div className="guest-item">
                                <div className="guest-item-framing-left"/>
                                <div className="guest-item-framing-right"/>
                                <img src="assets/guest-temp.jpg" alt="Guest name"/>
                                <div className="guest-content">
                                    <span className="guestName">Guest Name</span>
                                    <span className="guestDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, facere.</span>
                                </div>
                            </div>
                            <div className="guest-item">
                                <div className="guest-item-framing-left"/>
                                <div className="guest-item-framing-right"/>
                                <img src="assets/guest-temp.jpg" alt="Guest name"/>
                                <div className="guest-content">
                                    <span className="guestName">Guest Name</span>
                                    <span className="guestDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, facere.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Guests End  */}
            </div>
        </>
    )
}