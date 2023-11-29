import './PublicAbout.css'
import {PublicNavbar} from "../components/PublicNavbar";
import {Footer} from "../components/Footer";
import {gsap} from "gsap";
import {useLayoutEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const PublicAbout = () => {

    //Gsap Plugins
    gsap.registerPlugin(ScrollTrigger);

    //Refs
    const aboutGW = useRef(null);
    const aboutGW2 = useRef(null);
    const aboutCC = useRef(null);
    const aboutCards = useRef(null);

    //Animations
    useLayoutEffect(() => {
        window.scrollTo(0,0);
        const tl = gsap.timeline({
            // scrollTrigger: {
            //     trigger: aboutGW.current,
            // }
        });

        tl.from(".about-gw-head", {
            yPercent: 100,
            autoAlpha: 0,
            duration: 0.6
        })
            .from(".about-gw-text", {
                yPercent: 100,
                autoAlpha: 0,
                duration: 0.4
            })
            .from(".about-gw-img", {
                yPercent: 100,
                autoAlpha: 0,
                rotate: -45,
                duration: 0.4
            })
    }, [])

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutGW2.current,
                start: "-=1000",
            }
        });

        tl.from(".about-gw-text2", {
            yPercent: 100,
            autoAlpha: 0,
            duration: 0.4
        })
            .from(".about-gw-img2", {
                yPercent: 100,
                autoAlpha: 0,
                rotate: -45,
                duration: 0.4
            })
    }, [])

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutCards.current,
            }
        });

        tl.from(".card-item", {
            yPercent: 100,
            autoAlpha: 0,
            duration: 0.4,
            stagger: 0.2
        })
    }, [])

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutCC.current,
            }
        });

        tl.from(".about-cc .about-header", {
            yPercent: 100,
            autoAlpha: 0,
            duration: 0.6
        })
            .from(".about-cc .about-item span", {
                yPercent: 100,
                autoAlpha: 0,
                duration: 0.4
            })
            .from(".about-cc .about-item img", {
                yPercent: 100,
                autoAlpha: 0,
                rotate: -45,
                duration: 0.4
            })
    }, [])

    return (
        <>
            {/*Header*/}
            <PublicNavbar active="about"/>
            {/*Header End*/}
            <div className="about-page">
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
                <div className="blob">
                    <img src="/assets/blob.svg" alt="Blob"/>
                </div>
                <div className="blob glow">
                    <img src="/assets/blob.svg" alt="Blob"/>
                </div>
                <div className="about-container">
                    <div className="about-gw">
                        <div className="about-header about-gw-head">
                            <span className="head-text">Gateways 2023</span>
                            <span className="head-tag">7th December to 8th December</span>
                        </div>
                        <div className="about-content">
                            <div className="about-item about-gw-text" ref={aboutGW}>
                                <span>Gateways is a national level intercollegiate IT fest, organized by the Department of Computer Science, CHRIST (Deemed to be University) annually. CHRIST (Deemed to be University) was born out of the educational vision of St Kuriakose Elias Chavara, an educationalist and social reformer of the nineteenth century in South India. He founded the first Catholic indigenous congregation, Carmelites of Mary Immaculate (CMI), in 1831 which administers CHRIST (Deemed to be University).</span>
                                <div className="about-img about-gw-img"><img src="assets/christ2.JPG" alt="CHRIST (Deemed to be University)"/></div>
                            </div>
                            <div className="about-item about-gw-text2" ref={aboutGW2}>
                                <span>Gateways 2023, the national level intercollegiate IT fest, is being organized by the Department of Computer Science, CHRIST (Deemed to be University) on the 7th and 8th of December 2023. The two-day extravaganza provides a platform for postgraduate students to showcase their talents in various fields. The theme for this year's Gateways 2023 is "Code Cosmos" consisting of numerous technical and non-technical events along with a surprise event. The department will also be publishing the 2023 edition of INFOBAHN, a bi-annual magazine, during the fest</span>
                                <div className="about-img about-gw-img2"><img src="assets/gw_big.png" className="gw-img" alt="Gateways 2023"/></div>
                            </div>
                        </div>
                    </div>
                    <div className="about-cards" ref={aboutCards}>
                        <div className="card-item">
                            <img src="assets/eventImgs/th.png" alt=""/>
                            <span>2</span>
                            <span>Days</span>
                        </div>
                        <div className="card-item">
                            <img src="assets/eventImgs/be.webp" alt=""/>
                            <span>11</span>
                            <span>Events</span>
                        </div>
                        <div className="card-item">
                            <img src="assets/eventImgs/itq.png" alt=""/>
                            <span>11+</span>
                            <span>Colleges</span>
                        </div>
                    </div>
                    <div className="about-cc" ref={aboutCC}>
                        <div className="about-header">
                            <span className="head-text">Code Cosmos</span>
                            <span className="head-tag">Theme for 2023</span>
                        </div>
                        <div className="about-content">
                            <div className="about-item">
                                <span>CHRIST (Deemed to be University) is excited to unveil the theme for this year's Inter College IT Fest, Gateways 2023 - "Code Cosmos. " Inspired by space technology and recent achievements in space exploration, Code Cosmos symbolizes a quest for innovation and knowledge. It reflects the boundless potential of technology, mirroring the limitless expanse of the universe. This event promises a multifaceted experience, bringing together students and tech enthusiasts nationwide. Participants will engage in workshops, competitions, and discussions, exploring the convergence of technology and space science. Gateways 2023 invites all to embark on a cosmic journey, pushing the boundaries of human innovation</span>
                                <div className="about-img">
                                    <img src="assets/gw_white_trans.png" className="cc-img" alt="Code Cosmos"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Footer  */}
            <Footer active="about"/>
            {/*  Footer End   */}
        </>
    )
}