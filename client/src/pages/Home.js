import {Navbar} from "../components/Navbar";
import './Home.css';
import {ProgressBar} from "../components/ProgressBar";
import {useEffect, useState} from "react";
import {EventSlide} from "../components/EventSlide";

export const Home = () => {

    //States
    const [loadStat, setLoadStat] = useState(false);
    const [currSlide, setCurrSlide] = useState('it-quiz');
    const [disabled, setDisabled] = useState(false);

    //Temp
    let drag = 0;
    let dragMin = 0;
    useEffect(() => {
        drag = 0;
        dragMin = 0;
    }, [])

    //Loader Completion Check
    useEffect(() => {
        if (loadStat) {
            let el = document.getElementById("el");
            el.style.transform = "translateY(-10%)";
            el.style.opacity = "0";
            setTimeout(() => {
                el.style.display = "none";
                document.getElementById("es").style.display = "flex";
            }, 400)
            setLoadStat(false)
        }
    }, [loadStat])

    //Chip Slider
    function slideForward() {
        let ecc = document.getElementById("ecc");
        let dragMax = document.getElementById("ecc").scrollWidth;
        let curr = 0;
        if (drag >= dragMax - 377) {
            curr = dragMax;
        } else {
            drag += 500;
            curr = drag
        }
        ecc.scrollTo({
            top: 0,
            left: curr,
            behavior: "smooth"
        })
    }

    function slideBack() {
        let ecc = document.getElementById("ecc");
        ecc.scrollTo({
            top: 0,
            left: drag <= dragMin ? dragMin : drag -= 500,
            behavior: "smooth"
        })
    }

    //Event Component Animations
    function slideExchange(sid) {
        if (currSlide !== sid) {
            setDisabled(true);
            let item1 = document.getElementById(currSlide);
            let item2 = document.getElementById(sid);
            setCurrSlide(sid);
            item1.classList.remove("active");
            setTimeout(() => {
                item1.style.display = "none";
                item2.style.display = "grid";
                setTimeout(() => {
                    item2.classList.add("active");
                    setTimeout(() => {
                        setDisabled(false);
                    }, 400)
                }, 50)
            }, 400)
        }
    }


    return (
        <>
            {/*  Header  */}
            <Navbar active="home"/>
            {/*  Header End  */}
            {/*  Hero Section  */}
            <section className="hero" id="hero">
                {/*  Event Loading Screen  */}
                <section className="event-loading" id="el">
                    <div className="event-loading-text">
                        <span>EVENTS</span>
                    </div>
                    <div className="event-loading-progress">
                        <ProgressBar handler={setLoadStat}/>
                    </div>
                </section>
                {/*  Event Loading Screen End  */}
                {/*  Events Slides  */}
                <section className="event-slides" id="es">
                    <div className="event-slide-container">
                        <EventSlide id="it-quiz" imgSrc="assets/eventImgs/itQuiz.png" header="AstroBytes" tag="Space Tech Quiz" active="active"/>
                        <EventSlide id="ui-ux" imgSrc="assets/eventImgs/ui_ux.png" header="DesignNauts" tag="UI/UX Design" active="none"/>
                        <EventSlide id="treasure-hunt" imgSrc="assets/eventImgs/th.jpg" header="Intergalatic" tag="Treasure Hunt" active="none"/>
                        <EventSlide id="gaming" imgSrc="assets/eventImgs/ge.png" header="QUASAR ODYSSEY" tag="Gaming Event" active="none"/>
                        <EventSlide id="coding-debug" imgSrc="assets/eventImgs/cd.png" header="Stellar Perplexity" tag="Coding/Debugging" active="none"/>
                        <EventSlide id="ctf" imgSrc="assets/eventImgs/ctf.png" header="Space Wars" tag="Capture The Flag" active="none"/>
                        <EventSlide id="it-manager" imgSrc="assets/eventImgs/im.png" header="Space Captain" tag="IT manager" active="none"/>
                        <EventSlide id="hack" imgSrc="assets/eventImgs/hack.jpg" header="SpaceTech" tag="24hr Hackathon" active="none"/>
                        <EventSlide id="photo" imgSrc="assets/eventImgs/photo.png" header="Cosmic Capture" tag="Photography" active="none"/>
                        <EventSlide id="pe" imgSrc="assets/eventImgs/pe.png" header="Celestial Conversations" tag="Prompt Engineering" active="none"/>
                        <EventSlide id="se" imgSrc="assets/eventImgs/se.jpg" header="Surprise Event" tag="Shhh it's a secret" active="none"/>
                    </div>
                    <div className="chip-outer">
                        <i className="fa-solid fa-angle-left" tabIndex="0" onClick={() => {
                            slideBack()
                        }}/>
                        <div className="event-chips-container" id="ecc">
                            <button className={currSlide === "it-quiz" ? "active" : ""} disabled={disabled} tabIndex={0} onClick={() => {
                                slideExchange("it-quiz")
                            }}>IT QUIZ
                            </button>
                            <button className={currSlide === "ui-ux" ? "active" : ""} disabled={disabled} tabIndex={0} onClick={() => {
                                slideExchange("ui-ux")
                            }}>UI/UX
                            </button>
                            <button className={currSlide === "treasure-hunt" ? "active" : ""} disabled={disabled} tabIndex={0} onClick={() => {
                                slideExchange("treasure-hunt")
                            }}>Treasure Hunt
                            </button>
                            <button className={currSlide === "gaming" ? "active" : ""} disabled={disabled} tabIndex={0} onClick={() => {
                                slideExchange("gaming")
                            }}>Gaming
                            </button>
                            <button className={currSlide === "coding-debug" ? "active" : ""} disabled={disabled} tabIndex={0} onClick={() => {
                                slideExchange("coding-debug")
                            }}>Coding/Debugging
                            </button>
                            <button className={currSlide === "ctf" ? "active" : ""} disabled={disabled} tabIndex={0} onClick={() => {
                                slideExchange("ctf")
                            }}>Capture&nbsp;The&nbsp;Flag
                            </button>
                            <button className={currSlide === "it-manager" ? "active" : ""} disabled={disabled} tabIndex={0} onClick={() => {
                                slideExchange("it-manager")
                            }}>IT Manager
                            </button>
                            <button className={currSlide === "hack" ? "active" : ""} disabled={disabled} tabIndex={0} onClick={() => {
                                slideExchange("hack")
                            }}>Hackathon
                            </button>
                            <button className={currSlide === "photo" ? "active" : ""} disabled={disabled} tabIndex={0} onClick={() => {
                                slideExchange("photo")
                            }}>Photography
                            </button>
                            <button className={currSlide === "pe" ? "active" : ""} disabled={disabled} tabIndex={0} onClick={() => {
                                slideExchange("pe")
                            }}>Prompt&nbsp;Engineering
                            </button>
                            <button className={currSlide === "se" ? "active" : ""} disabled={disabled} tabIndex={0} onClick={() => {
                                slideExchange("se")
                            }}>Surprise Event
                            </button>
                        </div>
                        <i className="fa-solid fa-angle-right" tabIndex="0" onClick={() => {
                            slideForward()
                        }}/>
                    </div>
                </section>
                {/*  Events Slides End  */}
            </section>
            {/*  Hero Section End  */}
            {/*  Sponsors Section  */}
            <section className="sponsors" id="sponsors">
                <div className="sponsors-header">
                    <span>Our Sponsors</span>
                </div>
                <div className="star-sponsor">
                    <div className="star-sponsor-content">
                        <div className="star-logo-container">
                            <div className="logo-overlay"/>
                            <div className="star-logo">
                                <span>Your Logo here</span>
                            </div>
                        </div>
                        <div className="star-text">
                            <div className="star-name">
                                <span>Star Sponsor Name</span>
                            </div>
                            <div className="star-des">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At est laborum maiores porro possimus quas quasi quibusdam, velit voluptas? Aliquid aut consequuntur cum deleniti dignissimos distinctio dolore doloribus enim, eveniet expedita harum id iusto minus molestiae porro quas similique, veritatis?</span>
                            </div>
                            <div className="star-cta">
                                <span className="btn-overlay"/>
                                <a href="#" target="_blank" rel="noreferrer">Visit&nbsp;their&nbsp;website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Sponsors Section End  */}
        </>
    )
}