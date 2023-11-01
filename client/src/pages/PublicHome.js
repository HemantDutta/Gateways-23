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
    const [preLoad, setPreLoad] = useState(true);

    //Refs
    const heroRef = useRef(null);
    const heroContent = useRef(null);
    const eventTrigger = useRef(null);
    const sponsorTrigger = useRef(null);
    const heroHeader = useRef(null);
    const heroImg = useRef(null);
    const guest = useRef(null);
    const about = useRef(null);
    const rules = useRef(null);

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
        let now = new Date();
        let time = now.getTime();
        time += 1800 * 1000;
        now.setTime(time);
        document.cookie = `preloader=true; expires= ${now.toUTCString()}; path=/`;
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

    //Cookie getter
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    //Check Preloader
    useEffect(()=>{
        let preCookie = getCookie("preloader");
        if(preCookie) setPreLoad(false);
        else setPreLoad(true);
    },[])

    //Hero to Events Animation
    useLayoutEffect(() => {
        gsap.to(heroRef.current, {
            y: "20%",
            autoAlpha: 0,
            clipPath: "polygon(0 0, 100% 0%, 100% 50%, 0 50%)",
            filter: "blur(5px)",
            scrollTrigger: {
                trigger: heroContent.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        })

    }, [])

    //Hero Countdown Timer
    useEffect(() => {
        let eventDate = new Date("Dec 7, 2023 00:00:00").getTime();

        const countDown = setInterval(() => {
            let now = new Date().getTime();
            let timeLeft = eventDate - now;

            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days.toString();
            document.getElementById("hours").innerText = hours.toString();
            document.getElementById("minutes").innerText = minutes.toString();
            document.getElementById("seconds").innerText = seconds.toString();
        }, 1000);


        return () => {
            clearInterval(countDown);
        }
    }, []);

    //About Section Animation
    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: about.current,
                start: "top center",
            }
        })

        tl.from(".about-header span", {
            yPercent: 100,
            stagger: 0.2,
            opacity: 0
        })
        tl.from(".about-content .about-text", {
            yPercent: 20,
            opacity: 0,
            delay: 0.2
        }, 0)
        tl.from(".about-content .about-media img", {
            filter: "blur(20px)",
            delay: 0.3
        }, 0)
    }, [])

    //Rules Animation
    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: rules.current,
            },
        });

        tl.from(".rules-header", {
            yPercent: 100,
            autoAlpha: 0,
            duration: 0.6
        })
            .from(".rule-item", {
                autoAlpha: 0,
                y: 20,
                filter: "blur(5px)",
                duration: 0.4,
                stagger: 0.1
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
                stagger: 0.1,
                duration: 0.6,
            }, 0)
    }, [])

    //Sponsor Section Animation
    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sponsorTrigger.current,
                start: "top center",
            }
        });

        tl.from(".sponsor-header span", {
            yPercent: 100,
            autoAlpha: 0,
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

    //Guest Animation
    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: guest.current,
            },
        });

        tl.from(".guests-header", {
            yPercent: 100,
            autoAlpha: 0,
            duration: 0.6
        })
            .from(".guest-item", {
                autoAlpha: 0,
                y: 20,
                filter: "blur(5px)",
                duration: 0.4,
                stagger: 0.4
            })
    }, [])

    return (
        <>
            {/*Preloader*/}
            {
                preLoad &&
                <PreLoader preHandler={preLoader}/>
            }
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
                    <div className="t-minus">
                        <img src="/assets/curly.png" className="curly" alt="T-minus"/>
                        <div className="t-minus-content">
                            <span className="header">T-Minus | Dec 7th, 2023</span>
                            <div className="countdown">
                                <div className="time-unit">
                                    <span className="value" id="days">00</span>
                                    <span className="unit">Days</span>
                                </div>
                                <div className="time-unit">
                                    <span className="value" id="hours">00</span>
                                    <span className="unit">Hours</span>
                                </div>
                                <div className="time-unit">
                                    <span className="value" id="minutes">00</span>
                                    <span className="unit">Minutes</span>
                                </div>
                                <div className="time-unit">
                                    <span className="value" id="seconds">00</span>
                                    <span className="unit">Seconds</span>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/curly.png" className="curly" alt="T-minus"/>
                        <img src="/assets/rocket.gif" alt="Rocket" className="rocket"/>
                    </div>
                </section>
                {/*  Hero End  */}
                {/*About*/}
                <section className="about" id="about" ref={about}>
                    <div className="about-container">
                        <div className="about-header">
                            <span>About</span>
                            <span>Gateways</span>
                        </div>
                        <div className="about-content">
                            <div className="about-text">
                                <span>Gateways 2023, the national level intercollegiate IT fest, is being organized by the Department of Computer Science, CHRIST (Deemed to be University) on the 7th and 8th of December 2023. The two-day extravaganza provides a platform for postgraduate students to showcase their talents in various fields. The theme for this year's Gateways 2023 is "Code Cosmos" consisting of numerous technical and non-technical events along with a surprise event. The department will also be publishing the 2023 edition of INFOBAHN, a bi-annual magazine, during the fest.</span>
                                <Link to={"/about"}>Learn More</Link>
                            </div>
                            <div className="about-media"><img src="/assets/gw_big.png" alt="Gateways 2023"/></div>
                        </div>
                    </div>
                </section>
                {/*About End*/}
                {/*Rules*/}
                <section className="rules" id="rules" ref={rules}>
                    <div className="rules-container">
                        <div className="rules-header">
                            <span>Rules &</span>
                            <span>Guidelines</span>
                        </div>
                        <div className="rules-content">
                            <div className="rule-item">
                                <span className="sno">1</span>
                                <span className="rule">Any student pursuing postgraduate in computer science, data science, information technology or related fields can participate.</span>
                            </div>
                            <div className="rule-item">
                                <span className="sno">2</span>
                                <span className="rule">Gateways 2023 is a 2 days Technical Fest and participants are requested to plan adhering to the same.</span>
                            </div>
                            <div className="rule-item">
                                <span className="sno">3</span>
                                <span className="rule">Participants must bring a permission letter and ID card from their institution to participate.</span>
                            </div>
                            <div className="rule-item">
                                <span className="sno">4</span>
                                <span className="rule">Participants are requested to register through the website.</span>
                            </div>
                            <div className="rule-item">
                                <span className="sno">5</span>
                                <span className="rule">Students are required to follow the decorum of the event. Failing to adhere would lead to disqualification.</span>
                            </div>
                            <div className="rule-item">
                                <span className="sno">6</span>
                                <span className="rule">Participants are advised to clarify their doubts with the respective event coordinators before the event.</span>
                            </div>
                            <div className="rule-item">
                                <span className="sno">7</span>
                                <span className="rule">Participants are requested to be present in Formal Dress Code at the venue of their events 15 minutes before the event starts.</span>
                            </div>
                            <div className="rule-item">
                                <span className="sno">8</span>
                                <span className="rule">If eliminated, participants are welcome to participate in other events, keeping the time constraints in mind.</span>
                            </div>
                            <div className="rule-item">
                                <span className="sno">9</span>
                                <span className="rule">Participants can opt for multiple events keeping the time constraints in mind.</span>
                            </div>
                            <div className="rule-item">
                                <span className="sno">10</span>
                                <span className="rule">The decisions made by the judges will be final.</span>
                            </div>
                            <div className="rule-item">
                                <span className="sno">11</span>
                                <span className="rule">Participants will be held responsible for any damage caused by their actions during the fest to Christ University Property.</span>
                            </div>
                            <div className="rule-item">
                                <span className="sno">12</span>
                                <span className="rule">Details about Stellar Shift will be provided on-spot.</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Rules End*/}
                {/*  Events  */}
                <section className="events" id="events" ref={eventTrigger}>
                    <div className="blob">
                        <img src="/assets/blob.svg" alt="Blob"/>
                    </div>
                    <div className="blob glow">
                        <img src="/assets/blob.svg" alt="Blob"/>
                    </div>
                    <div className="blob">
                        <img src="/assets/blob2.svg" alt="Blob"/>
                    </div>
                    <div className="blob glow">
                        <img src="/assets/blob2.svg" alt="Blob"/>
                    </div>
                    <div className="blob">
                        <img src="/assets/blob3.svg" alt="Blob"/>
                    </div>
                    <div className="blob glow">
                        <img src="/assets/blob3.svg" alt="Blob"/>
                    </div>
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
                                    <img src="assets/eventImgs/be.webp" className="event-bg-img" data-atropos-offset="-5" alt="Hackathon"/>
                                    <span className="hover-text" data-atropos-offset="5">Beyond Earth</span>
                                    <span className="hover-text2" data-atropos-offset="5">Beyond Earth</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>12 Hour Exciting <span className="event-name">Hackathon</span></span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta"><Link to={"/event"} state={"be"}>Register</Link></button>
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
                                    <img src="assets/eventImgs/itq.png" className="event-bg-img" data-atropos-offset="-5" alt="IT Quiz"/>
                                    <span className="hover-text" data-atropos-offset="5">AstroBytes</span>
                                    <span className="hover-text2" data-atropos-offset="5">AstroBytes</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>Challenge your IT Knowledge in our <span className="event-name">IT Quiz</span></span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta"><Link to={"/event"} state={"itq"}>Register</Link></button>
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
                                    <img src="assets/eventImgs/ui_ux.jpg" className="event-bg-img" data-atropos-offset="-5" alt="UI/UX"/>
                                    <span className="hover-text" data-atropos-offset="5">ASTRAL AESTHETICS</span>
                                    <span className="hover-text2" data-atropos-offset="5">ASTRAL AESTHETICS</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>Unlock your imagination in our <span className="event-name">UI/UX</span> event</span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta"><Link to={"/event"} state={"ui_ux"}>Register</Link></button>
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
                                    <img src="assets/eventImgs/cdd.png" className="event-bg-img" data-atropos-offset="-5" alt="Hackathon"/>
                                    <span className="hover-text" data-atropos-offset="5">Stellar Perplexity</span>
                                    <span className="hover-text2" data-atropos-offset="5">Stellar Perplexity</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>Crack the cosmic code in our <span className="event-name">Coding & Debugging</span> event</span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta"><Link to={"/event"} state={"cdd"}>Register</Link></button>
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
                                    <img src="assets/eventImgs/photo.png" className="event-bg-img" data-atropos-offset="-5" alt="Photography"/>
                                    <span className="hover-text" data-atropos-offset="5">Cosmic Capture</span>
                                    <span className="hover-text2" data-atropos-offset="5">Cosmic Capture</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>Capture the cosmos in our <span className="event-name">photography</span> event</span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta"><Link to={"/event"} state={"photo"}>Register</Link></button>
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
                                    <img src="assets/eventImgs/th.png" className="event-bg-img" data-atropos-offset="-5" alt="Treasure Hunt"/>
                                    <span className="hover-text" data-atropos-offset="5">Cosmic Quest</span>
                                    <span className="hover-text2" data-atropos-offset="5">Cosmic Quest</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>Ready to embark on a <span className="event-name">Treasure Hunt</span> that spans the cosmos?</span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta"><Link to={"/event"} state={"th"}>Register</Link></button>
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
                                    <img src="assets/eventImgs/itm.jpg" className="event-bg-img" data-atropos-offset="-5" alt="IT Manager"/>
                                    <span className="hover-text" data-atropos-offset="5">Space Xperience</span>
                                    <span className="hover-text2" data-atropos-offset="5">Space Xperience</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>The Ultimate <span className="event-name">IT Manager</span> Challenge</span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta"><Link to={"/event"} state={"itm"}>Register</Link></button>
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
                                    <img src="assets/eventImgs/game.png" className="event-bg-img" data-atropos-offset="-5" alt="Gaming"/>
                                    <span className="hover-text" data-atropos-offset="5">Quasar Odyssey</span>
                                    <span className="hover-text2" data-atropos-offset="5">Quasar Odyssey</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>Are you the Cosmic Champion of the <span className="event-name">Gaming</span> universe?</span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta"><Link to={"/event"} state={"game"}>Register</Link></button>
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
                                    <img src="assets/eventImgs/ctf.png" className="event-bg-img" data-atropos-offset="-5" alt="Capture The Flag"/>
                                    <span className="hover-text" data-atropos-offset="5">Starlight Flag pursuit</span>
                                    <span className="hover-text2" data-atropos-offset="5">Starlight Flag pursuit</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>Decode Celestial Mysteries in our <span className="event-name">Capture The Flag</span> event</span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta"><Link to={"/event"} state={"ctf"}>Register</Link></button>
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
                                    <img src="assets/eventImgs/prompt.png" className="event-bg-img" data-atropos-offset="-5" alt="Prompt Engineering"/>
                                    <span className="hover-text" data-atropos-offset="5">Celestial Conversations</span>
                                    <span className="hover-text2" data-atropos-offset="5">Celestial Conversations</span>
                                    <div className="event-top" data-atropos-offset="-5">
                                        <span>Chat With The Stars in our <span className="event-name">Prompt Engineering</span> event</span>
                                    </div>
                                    <div className="event-bottom" data-atropos-offset="5">
                                        <button className="event-cta"><Link to={"/event"} state={"prompt"}>Register</Link></button>
                                        <div className="event-cta-bg"/>
                                    </div>
                                </div>
                            </Atropos>
                        </div>
                        {/*<div className="event-show-all">*/}
                        {/*    <Link to={"/events"}>*/}
                        {/*        <button className="show-all-btn">Show more&nbsp;<i className="fa-solid fa-chevron-down"/></button>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </div>
                </section>
                {/*  Events End  */}
                {/*  Sponsors  */}
                {/*<section className="sponsors" id="sponsors" ref={sponsorTrigger}>*/}
                {/*    <div className="blob">*/}
                {/*        <img src="/assets/blob3.svg" alt="Blob"/>*/}
                {/*    </div>*/}
                {/*    <div className="blob glow">*/}
                {/*        <img src="/assets/blob3.svg" alt="Blob"/>*/}
                {/*    </div>*/}
                {/*    <div className="sponsors-container">*/}
                {/*        <div className="sponsor-header">*/}
                {/*            <span>Our</span>*/}
                {/*            <span>Sponsors</span>*/}
                {/*        </div>*/}
                {/*        <div className="sponsor-main-flex">*/}
                {/*            <div className="sponsor-item-main">*/}
                {/*                <div className="top-blur"/>*/}
                {/*                <img src="assets/gw_white_trans.png" alt="Sponsor Logo"/>*/}
                {/*                <span className="sponsor-name">Name</span>*/}
                {/*            </div>*/}
                {/*            <div className="sponsor-item-main chief-sponsor">*/}
                {/*                <div className="top-blur"/>*/}
                {/*                <img src="assets/gw_white_trans.png" alt="Sponsor Logo"/>*/}
                {/*                <span className="sponsor-name">Name</span>*/}
                {/*            </div>*/}
                {/*            <div className="sponsor-item-main">*/}
                {/*                <div className="top-blur"/>*/}
                {/*                <img src="assets/gw_white_trans.png" alt="Sponsor Logo"/>*/}
                {/*                <span className="sponsor-name">Name</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*  Sponsors End  */}
                {/*  Guests  */}
                {/*<section className="guests" id="guests" ref={guest}>*/}
                {/*    <div className="blob">*/}
                {/*        <img src="/assets/blob2.svg" alt="Blob"/>*/}
                {/*    </div>*/}
                {/*    <div className="blob glow">*/}
                {/*        <img src="/assets/blob2.svg" alt="Blob"/>*/}
                {/*    </div>*/}
                {/*    <div className="guests-container">*/}
                {/*        <div className="guests-header">*/}
                {/*            <span>Meet</span>*/}
                {/*            <span>our Guests</span>*/}
                {/*        </div>*/}
                {/*        <div className="guests-grid">*/}
                {/*            <div className="guest-item guest-chief">*/}
                {/*                <div className="guest-item-framing-left"/>*/}
                {/*                <div className="guest-item-framing-right"/>*/}
                {/*                <div className="guest-content">*/}
                {/*                    <div className="guest-img">*/}
                {/*                        <img src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="guest-img-bg" alt="Guest name"/>*/}
                {/*                    </div>*/}
                {/*                    <div className="guest-text">*/}
                {/*                        <img src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="guest-img-fg" alt="Guest name"/>*/}
                {/*                        <span className="guestName">Guest Name</span>*/}
                {/*                        <span className="guestDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cumque earum esse eum inventore natus officiis perferendis repudiandae vitae. Iure!</span>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="guest-item guest-chief-mb">*/}
                {/*                <div className="guest-item-framing-left"/>*/}
                {/*                <div className="guest-item-framing-right"/>*/}
                {/*                <img src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Guest name"/>*/}
                {/*                <div className="guest-content">*/}
                {/*                    <span className="guestName">Guest Name</span>*/}
                {/*                    <span className="guestDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, facere.</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="guest-item">*/}
                {/*                <div className="guest-item-framing-left"/>*/}
                {/*                <div className="guest-item-framing-right"/>*/}
                {/*                <img src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Guest name"/>*/}
                {/*                <div className="guest-content">*/}
                {/*                    <span className="guestName">Guest Name</span>*/}
                {/*                    <span className="guestDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, facere.</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="guest-item">*/}
                {/*                <div className="guest-item-framing-left"/>*/}
                {/*                <div className="guest-item-framing-right"/>*/}
                {/*                <img src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Guest name"/>*/}
                {/*                <div className="guest-content">*/}
                {/*                    <span className="guestName">Guest Name</span>*/}
                {/*                    <span className="guestDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, facere.</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*  Guests End  */}
            </div>
            {/*  Footer  */}
            <Footer active="home"/>
            {/*  Footer End  */}
        </>
    )
}