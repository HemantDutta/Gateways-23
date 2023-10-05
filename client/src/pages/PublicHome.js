import {PublicNavbar} from "../components/PublicNavbar";
import {PreLoader} from "../components/PreLoader";
import './PublicHome.css'
import Halo from "vanta/src/vanta.halo";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import Atropos from "atropos/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Link} from "react-router-dom";
import {Footer} from "../components/Footer";

export const PublicHome = () => {

    //Register Scroll Trigger
    gsap.registerPlugin(ScrollTrigger);

    //states
    const [bgEffect, setBgEffect] = useState(null);

    //Refs
    const heroRef = useRef(null);
    const heroContent = useRef(null);
    const eventTrigger = useRef(null);
    const sponsorTrigger = useRef(null);
    const heroHeader = useRef(null);
    const heroImg = useRef(null);

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
                        xOffset: 0,
                        mouseControls: false,
                        amplitudeFactor: 3.0
                    }))
                }
            } else if (window.innerWidth > 1320) {
                {
                    setBgEffect(Halo({
                        el: heroRef.current,
                        size: 1.5,
                        baseColor: "#974de0",
                        backgroundColor: "#1d0728",
                        xOffset: 0.23,
                        mouseControls: false,
                        amplitudeFactor: 3.0
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
        const tl = gsap.timeline();
        tl.from(heroImg.current, {
            autoAlpha: 0,
            scale: 0.8,
            duration: 0.4,
        })
            .from(heroHeader.current, {
                yPercent: 10,
                duration: 0.4,
                autoAlpha: 0
            })
    }

    //Hero to Events Animation
    useLayoutEffect(() => {
        gsap.to(heroRef.current, {
            y: "50%",
            filter: "blur(5px)",
            scrollTrigger: {
                trigger: heroContent.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        })

    }, [])

    //Event Section Animation
    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: eventTrigger.current,
                start: "top center",
            }
        })

        tl.from(".events-header span", {
            yPercent: 100,
            stagger: 0.2,
            opacity: 0
        })
            .from(".atropos", {
                autoAlpha: 0,
                y: 100,
                filter: "blur(5px)",
                stagger: 0.2,
                duration: 0.6,
            })
    }, [])

    //Sponsor Section Animation
    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sponsorTrigger.current,
                start: "top center",
                markers: true
            }
        });

        tl.from(".sponsor-header span", {
            yPercent: 100,
            duration: 0.6
        })
            .from(".sponsor-item-main", {
                yPercent: 100,
                filter: "blur(5px)",
                stagger: 0.2,
                duration: 0.6,
                autoAlpha: 0
            })
    }, [])

    //Sponsors Card Hover Effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            const {currentTarget: target} = e;

            const rect = target.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            target.style.setProperty("--mouse-x", `${x}px`);
            target.style.setProperty("--mouse-y", `${y}px`);
        }

        for (const card of document.querySelectorAll(".sponsor-item-main")) {
            card.onmousemove = e => handleMouseMove(e);
        }
    }, [])

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
                    <div className="hero-container" ref={heroContent}>
                        <div className="hero-left" ref={heroHeader}>
                            <span data-text="Code">Code</span>
                            <span data-text="Cosmos">Cosmos</span>
                        </div>
                        <div className="hero-right" ref={heroImg}>
                            <img src="assets/gw_white_trans.png" alt="Gateways 2023"/>
                        </div>
                    </div>
                </section>
                {/*  Hero End  */}
                {/*  Events  */}
                <section className="events" id="events" ref={eventTrigger}>
                    {/*<div className="hero-blur"/>*/}
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
                        </div>
                        <div className="event-show-all">
                            <Link to={"/events"}>
                                <button className="show-all-btn">Show more&nbsp;<i className="fa-solid fa-chevron-down"/></button>
                            </Link>
                        </div>
                    </div>
                </section>
                {/*  Events End  */}
                {/*  Sponsors  */}
                <section className="sponsors" id="sponsors" ref={sponsorTrigger}>
                    <div className="sponsors-container">
                        <div className="sponsor-header">
                            <span>Our</span>
                            <span>Sponsors</span>
                        </div>
                        <div className="sponsor-main-flex">
                            <div className="sponsor-item-main">
                                <div className="top-blur"/>
                                <img src="assets/gw_white_trans.png" alt="Sponsor Logo"/>
                                <span className="sponsor-name">Name</span>
                            </div>
                            <div className="sponsor-item-main chief-sponsor">
                                <div className="top-blur"/>
                                <img src="assets/gw_white_trans.png" alt="Sponsor Logo"/>
                                <span className="sponsor-name">Name</span>
                            </div>
                            <div className="sponsor-item-main">
                                <div className="top-blur"/>
                                <img src="assets/gw_white_trans.png" alt="Sponsor Logo"/>
                                <span className="sponsor-name">Name</span>
                            </div>
                        </div>
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
                                    </div>
                                    <div className="guest-text">
                                        <img src="assets/guest-temp.jpg" className="guest-img-fg" alt="Guest name"/>
                                        <span className="guestName">Guest Name</span>
                                        <span className="guestDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cumque earum esse eum inventore natus officiis perferendis repudiandae vitae. Iure!</span>
                                    </div>
                                </div>
                            </div>
                            <div className="guest-item guest-chief-mb">
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
            {/*  Footer  */}
            <Footer active="home"/>
            {/*  Footer End  */}
        </>
    )
}