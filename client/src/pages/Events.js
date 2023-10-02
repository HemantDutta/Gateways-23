import {PublicNavbar} from "../components/PublicNavbar";
import Atropos from "atropos/react";
import './Events.css';
import {Footer} from "../components/Footer";
import {useEffect} from "react";

export const Events = () => {

    //Page to Top
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (
        <>
            {/*  Header  */}
            <PublicNavbar active="events"/>
            {/*  Header End  */}
            <div className="events-page">
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
                                <span className="hover-text" data-atropos-offset="5">Beyond Earth</span>
                                <span className="hover-text2" data-atropos-offset="5">Beyond Earth</span>
                                <div className="event-top" data-atropos-offset="-5">
                                    <span>6 Hour Exciting <span className="event-name">Hackathon</span></span>
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
                                <img src="assets/eventImgs/th.jpg" className="event-bg-img" data-atropos-offset="-5" alt="IT Quiz"/>
                                <span className="hover-text" data-atropos-offset="5">AstroBytes</span>
                                <span className="hover-text2" data-atropos-offset="5">AstroBytes</span>
                                <div className="event-top" data-atropos-offset="-5">
                                    <span>Challenge your IT Knowledge in our <span className="event-name">IT Quiz</span></span>
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
                                <img src="assets/eventImgs/se.jpg" className="event-bg-img" data-atropos-offset="-5" alt="UI/UX"/>
                                <span className="hover-text" data-atropos-offset="5">ASTRAL AESTHETICS</span>
                                <span className="hover-text2" data-atropos-offset="5">ASTRAL AESTHETICS</span>
                                <div className="event-top" data-atropos-offset="-5">
                                    <span>Unlock your imagination in our <span className="event-name">UI/UX</span> event</span>
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
                                <span className="hover-text" data-atropos-offset="5">Stellar Perplexity</span>
                                <span className="hover-text2" data-atropos-offset="5">Stellar Perplexity</span>
                                <div className="event-top" data-atropos-offset="-5">
                                    <span>Crack the cosmic code in our <span className="event-name">Coding & Debugging</span> event</span>
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
                                <img src="assets/eventImgs/th.jpg" className="event-bg-img" data-atropos-offset="-5" alt="Photography"/>
                                <span className="hover-text" data-atropos-offset="5">Cosmic Capture</span>
                                <span className="hover-text2" data-atropos-offset="5">Cosmic Capture</span>
                                <div className="event-top" data-atropos-offset="-5">
                                    <span>Capture the cosmos in our <span className="event-name">photography</span> event</span>
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
                                <img src="assets/eventImgs/se.jpg" className="event-bg-img" data-atropos-offset="-5" alt="Treasure Hunt"/>
                                <span className="hover-text" data-atropos-offset="5">Cosmic Quest</span>
                                <span className="hover-text2" data-atropos-offset="5">Cosmic Quest</span>
                                <div className="event-top" data-atropos-offset="-5">
                                    <span>Ready to embark on a <span className="event-name">Treasure Hunt</span> that spans the cosmos?</span>
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
                                <img src="assets/eventImgs/se.jpg" className="event-bg-img" data-atropos-offset="-5" alt="IT Manager"/>
                                <span className="hover-text" data-atropos-offset="5">Space Experience</span>
                                <span className="hover-text2" data-atropos-offset="5">Space Experience</span>
                                <div className="event-top" data-atropos-offset="-5">
                                    <span>The Ultimate <span className="event-name">IT Manager</span> Challenge</span>
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
                                <img src="assets/eventImgs/se.jpg" className="event-bg-img" data-atropos-offset="-5" alt="Gaming"/>
                                <span className="hover-text" data-atropos-offset="5">Quasar Odyssey</span>
                                <span className="hover-text2" data-atropos-offset="5">Quasar Odyssey</span>
                                <div className="event-top" data-atropos-offset="-5">
                                    <span>Are you the Cosmic Champion of the <span className="event-name">Gaming</span> universe?</span>
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
                                <img src="assets/eventImgs/se.jpg" className="event-bg-img" data-atropos-offset="-5" alt="Capture The Flag"/>
                                <span className="hover-text" data-atropos-offset="5">Starlight Flag pursuit</span>
                                <span className="hover-text2" data-atropos-offset="5">Starlight Flag pursuit</span>
                                <div className="event-top" data-atropos-offset="-5">
                                    <span>Decode Celestial Mysteries in our <span className="event-name">Capture The Flag</span> event</span>
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
                                <img src="assets/eventImgs/se.jpg" className="event-bg-img" data-atropos-offset="-5" alt="Prompt Engineering"/>
                                <span className="hover-text" data-atropos-offset="5">Celestial Conversations</span>
                                <span className="hover-text2" data-atropos-offset="5">Celestial Conversations</span>
                                <div className="event-top" data-atropos-offset="-5">
                                    <span>Chat With The Stars in our <span className="event-name">Prompt Engineering</span> event</span>
                                </div>
                                <div className="event-bottom" data-atropos-offset="5">
                                    <button className="event-cta">Register</button>
                                    <div className="event-cta-bg"/>
                                </div>
                            </div>
                        </Atropos>
                    </div>
                </div>
            </div>
            {/*  Footer  */}
            <Footer active="events"/>
            {/*  Footer End  */}
        </>
    )
}