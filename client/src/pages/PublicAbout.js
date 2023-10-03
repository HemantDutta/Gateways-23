import './PublicAbout.css'
import {PublicNavbar} from "../components/PublicNavbar";
import {Footer} from "../components/Footer";

export const PublicAbout = () => {
    return (
        <>
            {/*Header*/}
            <PublicNavbar active="about"/>
            {/*Header End*/}
            <div className="about-page">
                <div className="about-container">
                    <div className="about-gw">
                        <div className="about-header">
                            <span className="head-text">Gateways 2023</span>
                            <span className="head-tag">7th December to 8th December</span>
                        </div>
                        <div className="about-content">
                            <div className="about-item">

                            </div>
                        </div>
                    </div>
                    <div className="about-cards">
                        <div className="card-item">
                            <img src="assets/eventImgs/th.jpg" alt=""/>
                            <span>2</span>
                            <span>Days</span>
                        </div>
                        <div className="card-item">
                            <img src="assets/eventImgs/th.jpg" alt=""/>
                            <span>11</span>
                            <span>Events</span>
                        </div>
                        <div className="card-item">
                            <img src="assets/eventImgs/th.jpg" alt=""/>
                            <span>8+</span>
                            <span>Colleges</span>
                        </div>
                    </div>
                    <div className="about-cc">
                        <div className="about-header">
                            <span className="head-text">Code Cosmos</span>
                            <span className="head-tag">Theme for 2023</span>
                        </div>
                        <div className="about-content">
                            <p>CHRIST (Deemed to be University) is excited to unveil the theme for this year's Inter College IT Fest, Gateways 2023 - "Code Cosmos. " Inspired by space technology and recent achievements in space exploration, Code Cosmos symbolizes a quest for innovation and knowledge. It reflects the boundless potential of technology, mirroring the limitless expanse of the universe. This event promises a multifaceted experience, bringing together students and tech enthusiasts nationwide. Participants will engage in workshops, competitions, and discussions, exploring the convergence of technology and space science. Gateways 2023 invites all to embark on a cosmic journey, pushing the boundaries of human innovation</p>
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