import {Navbar} from "../components/Navbar";
import {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

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
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur culpa, delectus doloribus laudantium mollitia nihil odio porro possimus, quam, repudiandae saepe tempore veritatis voluptates.</span>
                        </main>
                        <div className="graphic"></div>
                        <span className="segue"></span>
                    </div>
                </section>
            </div>
            {/*  Body End  */}
        </>
    )
}