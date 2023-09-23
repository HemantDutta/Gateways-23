import './PublicNavbar.css'
import {Link} from "react-router-dom";
import {useEffect} from "react";

export const PublicNavbar = ({active}) => {

    let prevScroll = window.scrollY;
    useEffect(()=>{
        const checkScroll = () => {
            let nav = document.getElementById("navbar");
            if(window.scrollY>prevScroll){
                nav.style.transform = "translateY(-150%)";
            }
            if(prevScroll>window.scrollY){
                nav.style.transform = "none";
            }
            prevScroll = window.scrollY;
        }

        window.addEventListener("scroll", checkScroll);

        return ()=> {
            window.removeEventListener("scroll", checkScroll);
        }
    },[])

    return (
        <>
            <nav id="navbar">
                <div className="navbar-container">
                    <div className="navbar-underlay"/>
                    <div className="navbar-main">
                        <div className="navbar-left">
                            <div className="navbar-cu-logo">
                                <a href="https://christuniversity.in/" target="_blank" rel="noreferrer"><img src="assets/cu_white_logo.png" alt=""/></a>
                            </div>
                            <div className="navbar-social-links">
                                <button><i className="fa-brands fa-linkedin-in"/></button>
                                <button><i className="fa-brands fa-instagram"/></button>
                                {/*<button><i className="fa-brands fa-facebook"/></button>*/}
                            </div>
                        </div>
                        <div className="navbar-right">
                            <ul>
                                <li><Link to={"/"} className={active==="home"?"active":""}>Home</Link></li>
                                <li><a href="#events" className={active==="events"?"active":""}>Events</a></li>
                                <li><Link to={"/about"} className={active==="about"?"active":""}>About</Link></li>
                                <li>
                                    <button type="button">Brochure&nbsp;<i className="fa-solid fa-download"/></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}