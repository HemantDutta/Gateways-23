import {Navbar} from "../components/Navbar";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'

export const Home = () => {

    //Refs
    const imgAnim = useRef(null);

    //Register Scroll Trigger
    gsap.registerPlugin(ScrollTrigger);

    //Intro GSAP Animation
    useEffect(() => {
        gsap.to("#anim-bar", {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                scrub: 0.2,
                trigger: ".intro",
            }
        })
    }, [])

    //Hero Images Animation
    useEffect(() => {
        gsap.to("#ii1", {
            transform: "translateY(-20%)",
            scrollTrigger: {
                scrub: 0.2,
                trigger: "#hero",
                start: "top",
                end: "bottom",
            }
        })

        gsap.to("#ii2", {
            transform: "translateY(-30%)",
            scrollTrigger: {
                scrub: 0.3,
                trigger: "#hero",
                start: "top",
                end: "bottom",
            }
        })

        gsap.to("#ii3", {
            transform: "translateY(40%)",
            scrollTrigger: {
                scrub: 0.4,
                trigger: "#hero",
                start: "top",
                end: "bottom",
            }
        })
    }, [])

    //Text Line Animation
    useEffect(() => {
        gsap.to("#tl1", {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                scrub: 0.2,
                trigger: ".intro",
                start: "+200",
            }
        })
        gsap.to("#tl2", {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                scrub: 0.2,
                trigger: ".intro",
                start: "+300",
            }
        })
        gsap.to("#tl3", {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                scrub: 0.2,
                trigger: ".intro",
                start: "+400",
            }
        })
    }, [])

    //Image Parallax Animation
    useEffect(() => {
        document.querySelectorAll(".imgAnim").forEach(item => {
            gsap.to(item, {
                transform: "translateY(-20%)",
                scrollTrigger: {
                    trigger: item,
                    scrub: 0.2
                }
            })
        })
    }, [])

    //Smooth Scroll
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <>
            {/*  Header  */}
            <Navbar/>
            {/*  Header End  */}
            {/*  Body  */}
            <div className="home" id="home">
                <section className="hero container" id="hero">
                    <span className="head cali">GATEWAYS 2023</span>
                    <span className="tag">Thank you for making it <span className="cali gradient">unforgettable</span></span>
                    <div className="img-flex">
                        <div className="img-item" id="ii1">
                            <img src="/assets/hr_1.JPG" alt="Everyone" title="Everyone"/>
                        </div>
                        <div className="img-item" id="ii2">
                            <img src="/assets/hr_2.jpg" alt="Best Performance of the day" title="Best Performance of the day"/>
                        </div>
                        <div className="img-item" id="ii3">
                            <img src="/assets/hr_3.jpg" alt="I wasn't there for this :(" title="I wasn't there for this :("/>
                        </div>
                    </div>
                </section>
                <section className="intro" id="intro">
                    <div className="intro-container container">
                        <main>
                            <div className="small-head">
                                <span className="text cali gradient">What a ride</span>
                                <div className="anim-bar">
                                    <span></span>
                                    <span id="anim-bar"></span>
                                </div>
                            </div>
                            <div className="text-line">
                                <span>Believe you can and</span>
                                <span id="tl1">Believe you can and</span>
                            </div>
                            <div className="text-line">
                                <span>you're halfway</span>
                                <span id="tl2">you're halfway</span>
                            </div>
                            <div className="text-line">
                                <span>there</span>
                                <span id="tl3">there</span>
                            </div>
                            <span className="desc">
                                Gateways 2023 owes its success to the unyielding belief and hard work of our students. Their shared passion and tireless dedication turned aspirations into reality, overcoming challenges with resilience. Through collaborative efforts, they transformed the event into a celebration of innovation, showcasing the power of teamwork and a collective commitment to excellence.
                            </span>
                        </main>
                        <div className="graphic">
                            <img src="/assets/gw_white_trans.png" alt="Code Cosmos" title="Code Cosmos"/>
                            <img src="/assets/cu_white_logo.png" alt="Christ University" title="Christ University"/>
                        </div>
                        <span className="segue cali gradient">Let's see how it went...</span>
                    </div>
                </section>
                <section className="events" id="events">
                    <div className="events-container container">
                        <div className="ing" id="flash">
                            <div className="ing-entry">
                                <div className="left">
                                    <div className="head">
                                        <span>Flash</span>
                                        <span>Mob</span>
                                    </div>
                                    <span className="date">6th December 2023</span>
                                </div>
                                <div className="right">
                                    <img src="/assets/fm_1.jpg" alt="Flash Mob"/>
                                    <img src="/assets/fm_2.jpg" alt="Flash Mob"/>
                                </div>
                            </div>
                        </div>
                        <div className="fm-grid img-grid">
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/fmg_2.JPG" alt="Flash Mob" loading="lazy"/>
                                    <span className="cap cali">Flash Mob: A symphony of elegance...</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/fmg_3.JPG" alt="Flash Mob" loading="lazy"/>
                                    <span className="cap cali">spontaneous grace...</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/fmg_5.JPG" alt="Flash Mob" loading="lazy"/>
                                    <span className="cap cali">and synchronized brilliance...</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/fmg_1.jpg" alt="Flash Mob" loading="lazy"/>
                                    <span className="cap cali">that left us in awe...</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/fm_4.JPG" alt="Flash Mob" loading="lazy"/>
                                    <span className="cap cali">Thank you for the dazzling performance!</span>
                                </div>
                            </div>
                        </div>
                        <div className="ing-main" id="ing">
                            <div className="main-entry">
                                <div className="left">
                                    <img src="/assets/ing_1.jpg" alt="Inauguration"/>
                                    <img src="/assets/ing_2.jpg" alt="Inauguration"/>
                                </div>
                                <div className="right">
                                    <div className="head">
                                        <span>Event</span>
                                        <span>Launch</span>
                                    </div>
                                    <div className="date">
                                        <span>7th December 2023</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ing-grid img-grid">
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/in_g1.jpg" alt="Inauguration" loading="lazy"/>
                                    <span className="cap cali">Grand Inauguration: A Tapestry of Prestige</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/in_g2.jpg" alt="Inauguration" loading="lazy"/>
                                    <span className="cap cali">Prestigious Kickoff: Elegance Captured</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/in_g3.jpg" alt="Inauguration" loading="lazy"/>
                                    <span className="cap cali">A Grand Prelude</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/in_g4.jpg" alt="Inauguration" loading="lazy"/>
                                    <span className="cap cali">Embarking in Style: Grandeur Unveiled</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/in_g5.jpg" alt="Inauguration" loading="lazy"/>
                                    <span className="cap cali">A Prestigious Commencement!</span>
                                </div>
                            </div>
                        </div>
                        <div className="comp" id="eve">
                            <div className="comp-entry">
                                <div className="top">
                                    <div className="head">
                                        <span>Events</span>
                                    </div>
                                    <span className="date">7th & 8th December 2023</span>
                                </div>
                                <div className="bottom">
                                    <img src="/assets/eve_1.jpg" alt="Events"/>
                                    <img src="/assets/eve_2.jpg" alt="Events"/>
                                </div>
                            </div>
                        </div>
                        <div className="eve-grid img-grid">
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/evg_1.jpg" alt="Events" loading="lazy"/>
                                    <span className="cap cali">Capturing Moments of Pure Joy and Fun</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/evg_2.jpg" alt="Events" loading="lazy"/>
                                    <span className="cap cali">Laughter in Every Frame</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/evg_3.jpg" alt="Events" loading="lazy"/>
                                    <span className="cap cali">Vibrant Event Vibes</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/evg_4.jpg" alt="Events" loading="lazy"/>
                                    <span className="cap cali">A Tapestry of Smiles</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/evg_5.jpg" alt="Events" loading="lazy"/>
                                    <span className="cap cali">Where Fun Takes Center Stage</span>
                                </div>
                            </div>
                        </div>
                        <div className="val" id="val">
                            <div className="val-entry">
                                <div className="left">
                                    <div className="head special">
                                        <span>Vale</span>
                                        <span>dictory</span>
                                    </div>
                                    <span className="date">8th December 2023</span>
                                </div>
                                <div className="right">
                                    <img src="/assets/va_1.jpg" alt="Valedictory"/>
                                    <img src="/assets/va_2.jpg" alt="Valedictory"/>
                                </div>
                            </div>
                        </div>
                        <div className="val-grid img-grid">
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/vag_1.jpg" alt="Valedictory" loading="lazy"/>
                                    <span className="cap cali">Triumphant End: Hard Work Rewarded</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/vag_2.jpg" alt="Valedictory" loading="lazy"/>
                                    <span className="cap cali">Success in Every Smile</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/vag_3.jpg" alt="Valedictory" loading="lazy"/>
                                    <span className="cap cali">Cheers to Achievement</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/vag_4.jpg" alt="Valedictory" loading="lazy"/>
                                    <span className="cap cali">Hard Work, Happy Hearts</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/vag_5.jpg" alt="Valedictory" loading="lazy"/>
                                    <span className="cap cali">Culmination of Success</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/vag_6.jpg" alt="Valedictory" loading="lazy"/>
                                    <span className="cap cali">Smiles of Triumph</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/vag_7.jpg" alt="Valedictory" loading="lazy"/>
                                    <span className="cap cali">Well-Earned Applause</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/vag_8.jpg" alt="Valedictory" loading="lazy"/>
                                    <span className="cap cali">Every Effort Counts</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/vag_9.jpg" alt="Valedictory" loading="lazy"/>
                                    <span className="cap cali">Smiles All Around</span>
                                </div>
                            </div>
                            <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/vag_10.jpg" alt="Valedictory" loading="lazy"/>
                                    <span className="cap cali">A Tapestry of Happiness</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="conclusion" id="conclusion">
                    <div className="conclusion-container container">
                        <span className="quote">With sincere gratitude, we extend appreciation to the <span className="cali">Gateways 2023</span> team for their exemplary dedication and brilliance. As the curtain falls, we extend our best wishes to the Gateways 2024 team, trusting they will carry forward this <span className="cali">legacy</span> of excellence with finesse and innovation.</span>
                        <img src="/assets/conc_1.png" alt="Graphic" className="graphic"/>
                    </div>
                </section>
                <footer>
                    <div className="footer-container container">
                        <img src="/assets/ft_icon.png" alt="Icon"/>
                        <span>Designed & Developed by <a href="https://www.linkedin.com/in/hemantduttahd/" target="_blank" rel="noreferrer">Hemant Dutta</a>&nbsp;<a href="https://github.com/HemantDutta" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"/></a></span>
                        <img src="/assets/ft_icon.png" alt="Icon"/>
                    </div>
                </footer>
            </div>
            {/*  Body End  */}
        </>
    )
}