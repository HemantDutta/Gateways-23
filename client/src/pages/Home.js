import {Navbar} from "../components/Navbar";
import {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'

export const Home = () => {

    //Register Scroll Trigger
    gsap.registerPlugin(ScrollTrigger);

    //Intro GSAP Animation
    useEffect(() => {
        gsap.to("#anim-bar", {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                scrub: 0.2,
                trigger: ".intro",
                markers: true
            }
        })
    }, [])

    //Text Line Animation
    useEffect(()=>{
        gsap.to("#tl1", {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                scrub: 0.2,
                trigger: ".intro",
                start: "+200",
                markers: true
            }
        })
        gsap.to("#tl2", {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                scrub: 0.2,
                trigger: ".intro",
                start: "+300",
                markers: true
            }
        })
        gsap.to("#tl3", {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                scrub: 0.2,
                trigger: ".intro",
                start: "+400",
                markers: true
            }
        })
    },[])

    //Smooth Scroll
    useEffect(()=>{
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

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
                                <span>Lorem ipsum dolor sit</span>
                                <span id="tl1">Lorem ipsum dolor sit</span>
                            </div>
                            <div className="text-line">
                                <span>Lorem ipsum dolor sit</span>
                                <span id="tl2">Lorem ipsum dolor sit</span>
                            </div>
                            <div className="text-line">
                                <span>Lorem ipsum dolor sit</span>
                                <span id="tl3">Lorem ipsum dolor sit</span>
                            </div>
                        </main>
                        <div className="graphic">
                            <img src="/assets/gw_white_trans.png" alt="Code Cosmos" title="Code Cosmos"/>
                            <img src="/assets/cu_white_logo.png" alt="Christ University" title="Christ University"/>
                        </div>
                        <span className="segue cali gradient">Let's see how it went...</span>
                    </div>
                </section>
            </div>
            {/*  Body End  */}
        </>
    )
}