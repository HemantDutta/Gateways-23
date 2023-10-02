import './PublicNavbar.css'
import {Link} from "react-router-dom";
import {useEffect} from "react";

export const PublicNavbar = ({active}) => {

    let prevScroll = window.scrollY;
    useEffect(() => {
        const checkScroll = () => {
            let nav = document.getElementById("navbar");
            if (window.scrollY > prevScroll) {
                nav.style.transform = "translateY(-150%)";
            }
            if (prevScroll > window.scrollY) {
                nav.style.transform = "none";
            }
            prevScroll = window.scrollY;
        }

        window.addEventListener("scroll", checkScroll);

        return () => {
            window.removeEventListener("scroll", checkScroll);
        }
    }, [])

    //Page Reload
    useEffect(() => {
        window.addEventListener("resize", () => {
            window.location.reload();
        })

        return () => {
            window.removeEventListener("resize", () => {
                window.location.reload();
            })
        }
    }, [])

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
                            </div>
                        </div>
                        <div className="navbar-right">
                            <ul>
                                <li className="nav-link"><Link to={"/"} className={active === "home" ? "active" : ""}>Home</Link></li>
                                {
                                    active === "home" &&
                                    <li className="nav-link"><a href="#events" className={active === "events" ? "active" : ""}>Events</a></li>
                                }
                                {
                                    active !== "home" &&
                                    <li className="nav-link"><Link to={"/#events"} className={active === "events" ? "active" : ""}>Events</Link></li>
                                }
                                <li className="nav-link"><Link to={"/about"} className={active === "about" ? "active" : ""}>About</Link></li>
                                <li className="nav-btn">
                                    <button type="button">Brochure&nbsp;<i className="fa-solid fa-download"/></button>
                                </li>
                                <li className="menu-btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/*  Sidebar  */}
            <div className="sidebar" id="sidebar">
                <div className="sidebar-container">
                    <div className="sidebar-link">
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            {
                                active === "home" &&
                                <li><a href="#events">Events</a></li>
                            }
                            {
                                active !== "home" &&
                                <li><Link to={"/#events"}>Events</Link></li>
                            }
                            <li><Link to={"/about"}>About</Link></li>
                        </ul>
                    </div>
                    <div className="sidebar-socials">
                        <button><i className="fa-brands fa-linkedin-in"/></button>
                        <button><i className="fa-brands fa-instagram"/></button>
                    </div>
                    <div className="sidebar-brochure">
                        <button type="button">Brochure&nbsp;<i className="fa-solid fa-download"/></button>
                    </div>
                </div>
            </div>
            {/*  Sidebar End  */}
        </>
    )
}